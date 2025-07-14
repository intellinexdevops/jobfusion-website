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

import Image from "next/image";
import { Button } from "../ui/button";

const FooterCTA = () => {
  return (
    <section className="bg-gradient-to-r from-primary/80 via-primary/60 to-primary/80 relative">
      <div className="container flex flex-col items-center justify-center py-16">
        <p className="text-3xl text-center font-bold leading-10 text-white">
          Join thousands of professionals <br /> finding better careers.
        </p>
        <div className="mt-6 flex items-center gap-6">
          <Button className="uppercase">get started</Button>
          <Button
            variant="outline"
            className="uppercase text-primary border-none"
          >
            post a job
          </Button>
        </div>
      </div>
      <Image
        src="/images/leaf-1.svg"
        alt="Left Leaf"
        width={504}
        height={300}
        className="absolute top-0 left-0 hidden md:flex"
      />
      <Image
        src="/images/leaf-2.svg"
        alt="Left Leaf"
        width={504}
        height={300}
        className="absolute top-0 right-0"
      />
    </section>
  );
};

export default FooterCTA;
