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
import MediaCard from "@/components/media-card";
import React from "react";

const data = [
  {
    category: "Technology",
    title: "Introduction to Artificial Intelligence",
    description:
      "Artificial Intelligence (AI) refers to the simulation of human intelligence processes by machines, especially computer systems. These processes include learning, reasoning, problem-solving, perception, and language understanding. AI can be used in various fields, such as healthcare, robotics, and natural language processing, to make tasks more efficient and accurate.",
  },
  {
    category: "Science",
    title: "The Theory of Evolution The Theory of Evolution",
    description:
      "The Theory of Evolution, proposed by Charles Darwin in the 19th century, suggests that species evolve over time through a process of natural selection. This process involves the survival and reproduction of organisms that are better adapted to their environment. Over generations, small genetic changes accumulate, leading to the diversity of life we see today.",
  },
  {
    category: "History",
    title: "The Renaissance Period",
    description:
      "The Renaissance was a cultural movement that began in Italy during the 14th century and spread throughout Europe. It marked a period of revival in art, literature, and learning. The era saw advancements in science, exploration, and philosophy, with figures like Leonardo da Vinci, Michelangelo, and Galileo Galilei contributing to its intellectual and artistic growth.",
  },
];

const BlogAndMedia = () => {
  return (
    <section className="container">
      <p className="text-left uppercase text-3xl font-semibold">blog & media</p>
      <p className="text-left text-neutral-500">
        Helpful articles on interviews, resumes, or career growth.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {data.map((item, index) => (
          <MediaCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default BlogAndMedia;
