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
import React from "react";
import Modal from "../../ui/modal";
import Logo from "../../logo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import ResetWithEmailComponent from "../../com/auth/reset-with-email-component";
import ResetWithPhoneComponent from "../../com/auth/reset-with-phone-component";

const ResetPasswordComponent = () => {
  return (
    <Modal>
      <div>
        <Logo />
        <div className="mt-[30px]">
          <p className="text-xl font-bold text-text">Reset Password</p>
          <p className="text-sm text-gray-600">Please enter your details.</p>
        </div>
      </div>
      <div className="mt-[10px]">
        <Tabs defaultValue="email">
          <TabsList className="grid grid-cols-2 mb-5">
            <TabsTrigger value="email">Email Address</TabsTrigger>
            <TabsTrigger value="phone">Phone Number</TabsTrigger>
          </TabsList>

          <TabsContent value="email">
            <ResetWithEmailComponent />
          </TabsContent>
          <TabsContent value="phone">
            <ResetWithPhoneComponent />
          </TabsContent>
        </Tabs>
      </div>
    </Modal>
  );
};

export default ResetPasswordComponent;
