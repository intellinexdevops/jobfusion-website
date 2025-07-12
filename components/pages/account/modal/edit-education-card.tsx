// Copyright 2025 wolf
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  school: z.string(),
  logo: z.optional(z.string()),
  attendedDate: z.optional(z.date()),
  graduatedAt: z.optional(z.date()),
  degree: z.string(),
  areaOfStudy: z.string(),
  isCurrentlyStudy: z.boolean().default(false),
  description: z.optional(z.string()),
});

const EditEducationCard = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const [open, setOpen] = React.useState(false);
  const [openDatePicker, setOpenDatePicker] = React.useState(false);
  const [openGraduatedDate, setOpenGraduatedDate] = React.useState(false);

  const imageInputRef = React.useRef<HTMLInputElement>(null);
  const [previewAvatarUrl, setPreviewAvatarUrl] = React.useState<string | null>(
    null
  );
  const [fileAvatar, setFileAvatar] = React.useState<File | null>(null);

  const handleChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];

      if (file instanceof Blob) {
        setFileAvatar(file);
        setPreviewAvatarUrl(URL.createObjectURL(file));
      } else {
        console.error("Selected file is not a Blob:", file);
      }
    } else {
      console.warn("No file selected");
    }
  };

  console.log(fileAvatar);

  const onSubmit = () => {};
  return (
    <div className="flex items-start gap-4 border border-300 rounded-lg p-3 bg-50">
      <div className="w-10 h-10 rounded-md relative overflow-hidden">
        <Image src="/images/placeholder-image.webp" fill alt="Logo" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-0.5">
          <p className="text-sm font-medium text-800">
            Information Technology{" "}
          </p>

          <button
            onClick={() => setOpen(true)}
            className="text-xs text-primary hover:underline"
          >
            Edit
          </button>
        </div>
        <p className="text-xs text-500">University of South-East Asia</p>
        <p className="text-xs text-500">2023-10-01 - Present</p>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-full rounded-lg bg-white max-h-[90%] overflow-scroll">
          <DialogTitle className="">Edit Education</DialogTitle>
          <p className="text-xs text-muted-foreground -mt-3">
            Make changes to your education information. Click “Save” when
            you&apos;re done.
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-transparent"
            >
              <FormField
                control={form.control}
                name="logo"
                render={() => (
                  <FormItem className="lg:col-span-2">
                    <div className="flex items-end gap-5">
                      <div className="relative overflow-hidden rounded w-32">
                        <Image
                          src={previewAvatarUrl ?? "/images/Avatar.png"}
                          width={512}
                          height={512}
                          className="w-full h-full object-cover"
                          alt="Avatar"
                        />
                        <input
                          type="file"
                          ref={imageInputRef}
                          onChange={handleChangeAvatar}
                          name=""
                          hidden
                          id=""
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div>
                          <Button
                            variant="outline"
                            type="button"
                            onClick={() => imageInputRef.current?.click()}
                          >
                            Upload Logo
                          </Button>
                        </div>
                        <p className="text-xxs text-600">
                          At least 800&times;800 px recommended. <br />
                          JPG or PNG is allowed.
                        </p>
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="school"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel className="text-xs">
                      School <span className="text-error">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="e.g., University of Oxford"
                        className="bg-50"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="attendedDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel className="text-xs mt-1">
                      Attended Date
                    </FormLabel>
                    <FormControl>
                      <Popover
                        open={openDatePicker}
                        onOpenChange={setOpenDatePicker}
                        modal
                      >
                        <PopoverTrigger asChild>
                          <Input
                            {...field}
                            placeholder="Optional"
                            className="bg-50 text-start"
                            value={
                              field.value
                                ? new Date(field.value).toLocaleDateString()
                                : ""
                            }
                            readOnly
                          />
                        </PopoverTrigger>
                        <PopoverContent>
                          <Calendar
                            mode="single"
                            selected={field.value}
                            captionLayout="buttons"
                            onSelect={(date) => {
                              form.setValue("attendedDate", date);
                              setOpenDatePicker(false);
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="graduatedAt"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel className="text-xs mt-1">
                      Graduated Date
                    </FormLabel>
                    <FormControl>
                      <Popover
                        open={openGraduatedDate}
                        onOpenChange={setOpenGraduatedDate}
                        modal
                      >
                        <PopoverTrigger asChild>
                          <Input
                            {...field}
                            placeholder="Optional"
                            className="bg-50 text-start"
                            value={
                              field.value
                                ? new Date(field.value).toLocaleDateString()
                                : ""
                            }
                            readOnly
                          />
                        </PopoverTrigger>
                        <PopoverContent>
                          <Calendar
                            mode="single"
                            selected={field.value}
                            captionLayout="buttons"
                            onSelect={(date) => {
                              form.setValue("graduatedAt", date);
                              setOpenGraduatedDate(false);
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="degree"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs">
                      Degree <span className="text-error">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="h-10 bg-50">
                          <SelectValue
                            placeholder="Select degree"
                            className="h-10 bg-50"
                            {...field}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Degree</SelectLabel>
                            <SelectItem value="associate-degree">
                              Associate Degree
                            </SelectItem>
                            <SelectItem value="bachelor-degree">
                              Bachelor&apos;s Degree
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="areaOfStudy"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs mt-1">
                      Area of study <span className="text-error">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger className="h-10 bg-50">
                          <SelectValue
                            placeholder="Select area of study"
                            className="h-10 bg-50"
                            {...field}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Area of study</SelectLabel>
                            <SelectItem value="software-development">
                              Software Development
                            </SelectItem>
                            <SelectItem value="network-engineer">
                              Network Engineer
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isCurrentlyStudy"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1">
                    <FormLabel className="text-xs mt-1">
                      I currently study here.
                    </FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="lg:col-span-2">
                    <FormLabel className="text-xs">
                      I currently study here.
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Describe about yours..."
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-3">
                <DialogClose asChild>
                  <Button variant="outline">Discard</Button>
                </DialogClose>
                <Button type="submit">Save Change</Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditEducationCard;
