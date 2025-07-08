"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

const formSchema = z.object({
  phone: z.string().min(7).max(20),
  phoneCode: z.string(),
});
export default function SignUpWithPhoneComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      phoneCode: "855",
    },
  });
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    if (!values.phone || !values.phoneCode) {
      // Show errors like zod
      return;
    }
    console.log(values);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 flex flex-col"
      >
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="flex items-center gap-2">
                  <FormField
                    control={form.control}
                    name="phoneCode"
                    render={({ field }) => (
                      <Select defaultValue="855">
                        <SelectTrigger className="flex-1 py-2.5">
                          <SelectValue {...field} placeholder="Phone Code" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Phone Code</SelectLabel>
                            <SelectItem value="855">KH (+855)</SelectItem>
                            <SelectItem value="1">US (+1)</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  <Input placeholder="Phone number" {...field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button size="me" type="submit" className="font-medium text-[14px]">
          Sign Up
        </Button>

        <div className="flex items-center space-x-1 justify-center">
          <p className="text-xs text-center text-gray-500">
            Already have an account?
          </p>
          <Link
            replace
            href="/sign-in"
            className="text-sm font-medium text-primary underline"
          >
            Sign In
          </Link>
        </div>
      </form>
    </Form>
  );
}
