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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React, { ChangeEvent } from "react";

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const EditProfileModal = ({ open, onOpenChange }: DialogProps) => {
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        style={{ borderRadius: 20 }}
        className="w-full max-h-[90%] overflow-scroll"
      >
        <DialogTitle>Edit Profile</DialogTitle>
        <div>
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
                  onClick={() => imageInputRef.current?.click()}
                >
                  Change Avatar
                </Button>
              </div>
              <p className="text-xxs text-600">
                At least 800&times;800 px recommended. <br />
                JPG or PNG is allowed.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-8">
            <div className="flex flex-col gap-2">
              <Label className="text-xs">Full name</Label>
              <Input placeholder="Full name" className="bg-50" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs">Username</Label>
              <Input placeholder="e.g., johnsmith" className="bg-50" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs">Title</Label>
              <Input placeholder="e.g., Software Engineer" className="bg-50" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs">Physical Address</Label>
              <Input placeholder="e.g., London, UK" className="bg-50" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-xs">Set a Status</Label>

              <Input placeholder="e.g., London, UK" className="bg-50" />
            </div>

            <div className="flex flex-col flex-1 gap-2 items-end justify-end">
              <div className="flex items-center gap-4">
                <DialogClose asChild>
                  <Button variant="outline">Discard</Button>
                </DialogClose>
                <Button>Save Change</Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;
