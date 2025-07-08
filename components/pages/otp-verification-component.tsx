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
import React from "react";
import Modal from "../ui/modal";
import Logo from "../logo";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";
import { Button } from "../ui/button";

const OtpVerificationComponent = () => {
  const [otp, setOtp] = React.useState<string>();

  const handleChangeOtp = (value: string) => {
    setOtp(value);

    if (value.length === 6) {
      console.log(otp);
    }
  };

  return (
    <Modal>
      <div>
        <Logo />
        <div className="mt-[30px]">
          <p className="text-xl font-bold text-text">OTP Verification</p>
          <p className="text-sm text-gray-600">
            We&apos;ve sent you the verification code through identifier.
          </p>
        </div>
        <div className="mt-5">
          <InputOTP maxLength={6} value={otp} onChange={handleChangeOtp}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="mt-5 flex flex-col">
          <Button>Verify</Button>
        </div>
      </div>
    </Modal>
  );
};

export default OtpVerificationComponent;
