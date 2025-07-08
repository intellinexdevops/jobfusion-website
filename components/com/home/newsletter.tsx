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

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const Newsletter = () => {
  return (
    <section className="container my-24">
      <div className="flex flex-col md:flex-row gap-10 items-center">
        <Image
          src="/images/newsletter.svg"
          alt="Newsletter"
          width={396}
          height={396}
          className="lg:mr-24"
        />
        <div className="flex flex-col gap-4">
          <p className="text-4xl font-semibold text-neutral-900">
            Subscribe to our <br /> Newsletter!
          </p>
          <p className="text-neutral-500">
            Subscribe to our newsletter and stay updated.
          </p>
          <div className="flex items-center gap-4 mt-10">
            <Input className="shadow-none" placeholder="Email address" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
