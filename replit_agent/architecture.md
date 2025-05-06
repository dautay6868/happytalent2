# Architecture Documentation

## Overview

This application is a full-stack web platform for "Happy Talent," a children's arts and talent center offering various programs like modeling, acting, dance, and music. The architecture follows a modern monorepo structure with shared code between frontend and backend components. The application is designed to showcase program offerings, handle student inquiries and registrations, and provide information about teachers and schedules.

## System Architecture

### High-Level Architecture

The application follows a client-server architecture with the following main components:

1. **Frontend**: React-based single-page application (SPA) with component-based UI
2. **Backend**: Express.js API server that handles data operations and serves the frontend
3. **Database**: PostgreSQL database (accessed via Neon serverless) for storing application data
4. **Shared Code**: Common code (schemas, types) shared between frontend and backend

### Directory Structure

```
├── client/               # Frontend React application
│   ├── src/              # Source code for the React app
│   ├── index.html        # HTML entry point
├── server/               # Backend Express application 
│   ├── index.ts          # Main server entry point
│   ├── routes.ts         # API route definitions
│   ├── vite.ts           # Vite development server configuration
├── db/                   # Database layer
│   ├── index.ts          # Database connection configuration
│   ├── seed.ts           # Seed data for development
├── shared/               # Shared code between client and server
│   ├── schema.ts         # Database schema and validation schemas
├── public/               # Static assets (generated)
```

## Key Components

### Frontend (Client)

The frontend is a React application structured with modern patterns:

- **Framework**: React with TypeScript
- **Routing**: Uses Wouter for lightweight client-side routing
- **UI Components**: Leverages Shadcn UI (built on Radix UI primitives) for accessible, composable components
- **Styling**: Tailwind CSS with custom theming
- **State Management**: React Query for server state management
- **Form Handling**: React Hook Form with Zod validation

Key frontend directories:
- `components/`: Reusable UI components
  - `ui/`: Shadcn UI base components
  - `layout/`: Layout components like Header and Footer
  - `sections/`: Page section components
- `pages/`: Page components corresponding to routes
- `hooks/`: Custom React hooks
- `lib/`: Utility functions and configuration

### Backend (Server)

The backend is a Node.js Express application with TypeScript:

- **Framework**: Express.js with TypeScript
- **API**: RESTful API endpoints for programs, inquiries, and contact forms
- **Middleware**: Custom middleware for logging and error handling
- **Development**: Integrated with Vite for development convenience

The server handles:
- Serving the frontend application in production
- Processing API requests
- Interacting with the database

### Database Layer

The application uses Drizzle ORM with PostgreSQL (via Neon serverless):

- **ORM**: Drizzle ORM for type-safe database operations
- **Connection**: @neondatabase/serverless for serverless PostgreSQL access
- **Schema**: Type-safe schema definitions shared between frontend and backend
- **Migrations**: Drizzle Kit for managing database migrations

### Schema Design

The database has the following main tables:
- `programs`: Stores program details (modeling, acting, dance, etc.)
- `teachers`: Information about instructors linked to programs
- `gallery_items`: Gallery images showcasing program activities
- `inquiries`: Student inquiries and registration requests
- `schedules`: Program scheduling information

## Data Flow

1. **User Request Flow**:
   - User accesses the application through the browser
   - React router determines the appropriate component to render
   - For data needs, React Query fetches data from the API endpoints
   - User interactions (e.g., form submissions) are sent to API endpoints

2. **Server Request Flow**:
   - Express server receives API requests
   - Routes direct requests to appropriate handlers
   - Database operations are performed using Drizzle ORM
   - Response is sent back to the client

3. **Data Validation Flow**:
   - Shared Zod schemas validate data on both client and server
   - Client validates form inputs before submission
   - Server validates incoming data before database operations

## External Dependencies

### Frontend Dependencies
- **@radix-ui**: UI primitive components
- **@tanstack/react-query**: Data fetching and caching
- **wouter**: Lightweight routing
- **@hookform/resolvers**: Form validation with Zod
- **class-variance-authority**: Component variants
- **clsx/tailwind-merge**: CSS class name utilities

### Backend Dependencies
- **express**: Web server framework
- **drizzle-orm**: TypeScript ORM
- **@neondatabase/serverless**: PostgreSQL serverless client
- **zod**: Schema validation

## Deployment Strategy

The application is configured for deployment on Replit, with the following setup:

1. **Build Process**:
   - Frontend: Vite bundles the React application
   - Backend: esbuild compiles TypeScript code
   - Combined: Single process serves both API and static assets

2. **Environment Configuration**:
   - Uses environment variables for database connections and other config
   - Development mode includes additional developer tools

3. **Deployment Configuration**:
   - Configured in `.replit` file for Replit deployment
   - Runs on port 5000 locally, exposed as port 80 in production
   - Includes auto-scaling configuration

4. **Database Setup**:
   - Neon serverless PostgreSQL for production
   - Database URL provided via environment variables
   - Migrations run via `db:push` command

5. **Development Workflow**:
   - Includes development server with hot module replacement
   - Database seeding for development data

## Security Considerations

1. **Data Validation**: Uses Zod for strict type checking and validation on both client and server
2. **Database Security**: Uses parameterized queries through Drizzle ORM to prevent SQL injection
3. **Environment Separation**: Different configurations for development and production

## Future Expansion Considerations

The architecture supports future expansion through:

1. **Modular Components**: UI components are highly reusable
2. **Scalable Schema**: Database schema can be extended with additional tables
3. **API Extensibility**: API routes can be easily added to the existing structure