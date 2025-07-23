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
import ExperienceMasonry from "./com/experience";
import EducationMasonry from "./com/education";
import ProjectMasonry from "./com/project";
import Skill from "./com/skill";
import LanguageMasonry from "./com/language";
import CertificateMasonry from "./com/certificates";
import HabitMasonry from "./com/habits";
import CourseMasonry from "./com/courses";

const BackgroundProfile = () => {
  return (
    <div className="col-span-12 md:col-span-8 lg:col-span-9">
      <div className="masonry-grid">
        <div className="masonry-item">
          <ExperienceMasonry />
        </div>
        <div className="masonry-item">
          <EducationMasonry />
        </div>
        <div className="masonry-item">
          <Skill />
        </div>
        <div className="masonry-item">
          <ProjectMasonry isImage={false} />
        </div>
        <div className="masonry-item">
          <HabitMasonry />
        </div>
        <div className="masonry-item">
          <ProjectMasonry />
        </div>
        <div className="masonry-item">
          <LanguageMasonry />
        </div>
        <div className="masonry-item">
          <CertificateMasonry />
        </div>
        <div className="masonry-item">
          <CourseMasonry />
        </div>
      </div>
    </div>
  );
};

export default BackgroundProfile;
