import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactFormSchema, ContactFormData } from "@shared/schema";

const ContactForm = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });

  const submitContact = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Gửi tin nhắn thành công!",
        description: data.message || "Chúng tôi sẽ phản hồi sớm nhất có thể.",
      });
      reset();
    },
    onError: (error) => {
      console.error("Error submitting contact form:", error);
      toast({
        title: "Đã xảy ra lỗi",
        description: "Vui lòng thử lại sau hoặc liên hệ trực tiếp với chúng tôi.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setSubmitting(false);
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    submitContact.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <Label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Họ tên
          </Label>
          <Input
            id="name"
            {...register("name")}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <Label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
          Số điện thoại
        </Label>
        <Input
          id="phone"
          {...register("phone")}
          className={errors.phone ? "border-red-500" : ""}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div className="mb-4">
        <Label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
          Chủ đề
        </Label>
        <Input
          id="subject"
          {...register("subject")}
          className={errors.subject ? "border-red-500" : ""}
        />
        {errors.subject && (
          <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
        )}
      </div>

      <div className="mb-6">
        <Label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Tin nhắn
        </Label>
        <Textarea
          id="message"
          rows={5}
          {...register("message")}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
        disabled={submitting}
      >
        {submitting ? "Đang gửi..." : "Gửi Tin Nhắn"}
      </Button>
    </form>
  );
};

export default ContactForm;
