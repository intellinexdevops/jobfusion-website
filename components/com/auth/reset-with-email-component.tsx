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

const formSchema = z.object({
  email: z.string().min(3).max(50).email(),
});
export default function ResetWithEmailComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    if (!values.email) {
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button size="me" type="submit" className="font-medium text-[14px]">
          Reset
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
