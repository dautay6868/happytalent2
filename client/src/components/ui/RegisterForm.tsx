import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Program, inquirySchema, InquiryInsert } from "@shared/schema";

interface RegisterFormProps {
  programs: Program[];
}

const RegisterForm = ({ programs }: RegisterFormProps) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<InquiryInsert>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      parentName: "",
      phone: "",
      childName: "",
      childAge: undefined,
      programId: undefined,
    }
  });

  const submitInquiry = useMutation({
    mutationFn: async (data: InquiryInsert) => {
      const response = await apiRequest("POST", "/api/inquiries", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Đăng ký thành công!",
        description: data.message || "Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.",
      });
      reset();
    },
    onError: (error) => {
      console.error("Error submitting inquiry:", error);
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

  const onSubmit = async (data: InquiryInsert) => {
    setSubmitting(true);
    submitInquiry.mutate(data);
  };

  const handleProgramChange = (value: string) => {
    setValue('programId', parseInt(value));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <Label htmlFor="parentName" className="block text-gray-700 font-medium mb-2">
          Họ tên phụ huynh
        </Label>
        <Input
          id="parentName"
          placeholder="Nguyễn Văn A"
          {...register("parentName")}
          className={errors.parentName ? "border-red-500" : ""}
        />
        {errors.parentName && (
          <p className="text-red-500 text-xs mt-1">{errors.parentName.message}</p>
        )}
      </div>

      <div className="mb-4">
        <Label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
          Số điện thoại
        </Label>
        <Input
          id="phone"
          placeholder="0xxxxxxxxx"
          {...register("phone")}
          className={errors.phone ? "border-red-500" : ""}
        />
        {errors.phone && (
          <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div className="mb-4">
        <Label htmlFor="childName" className="block text-gray-700 font-medium mb-2">
          Họ tên học viên
        </Label>
        <Input
          id="childName"
          placeholder="Nguyễn Văn B"
          {...register("childName")}
          className={errors.childName ? "border-red-500" : ""}
        />
        {errors.childName && (
          <p className="text-red-500 text-xs mt-1">{errors.childName.message}</p>
        )}
      </div>

      <div className="mb-4">
        <Label htmlFor="childAge" className="block text-gray-700 font-medium mb-2">
          Độ tuổi học viên
        </Label>
        <Input
          id="childAge"
          type="number"
          placeholder="8"
          min={4}
          max={15}
          {...register("childAge", { valueAsNumber: true })}
          className={errors.childAge ? "border-red-500" : ""}
        />
        {errors.childAge && (
          <p className="text-red-500 text-xs mt-1">{errors.childAge.message}</p>
        )}
      </div>

      <div className="mb-6">
        <Label htmlFor="program" className="block text-gray-700 font-medium mb-2">
          Khóa học quan tâm
        </Label>
        <Select onValueChange={handleProgramChange}>
          <SelectTrigger className={errors.programId ? "border-red-500" : ""}>
            <SelectValue placeholder="Chọn khóa học" />
          </SelectTrigger>
          <SelectContent>
            {programs && programs.length > 0 ? (
              programs.map((program) => (
                <SelectItem key={program.id} value={program.id.toString()}>
                  {program.name}
                </SelectItem>
              ))
            ) : (
              <>
                <SelectItem value="1">Mẫu Nhí</SelectItem>
                <SelectItem value="2">MC Nhí</SelectItem>
                <SelectItem value="3">Diễn Viên Nhí</SelectItem>
                <SelectItem value="4">Dance</SelectItem>
                <SelectItem value="5">Piano</SelectItem>
              </>
            )}
          </SelectContent>
        </Select>
        {errors.programId && (
          <p className="text-red-500 text-xs mt-1">Vui lòng chọn khóa học</p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        disabled={submitting}
      >
        {submitting ? "Đang gửi..." : "Gửi Đăng Ký"}
      </Button>
    </form>
  );
};

export default RegisterForm;
