import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ModelChildren from "@/pages/ModelChildren";
import McChildren from "@/pages/McChildren";
import ActorChildren from "@/pages/ActorChildren";
import Dance from "@/pages/Dance";
import Piano from "@/pages/Piano";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function Router() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/mau-nhi" component={ModelChildren} />
          <Route path="/mc-nhi" component={McChildren} />
          <Route path="/dien-vien-nhi" component={ActorChildren} />
          <Route path="/dance" component={Dance} />
          <Route path="/piano" component={Piano} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
