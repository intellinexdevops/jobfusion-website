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

import { Search } from "lucide-react";
import React, { ChangeEvent } from "react";

interface SearchInputProps {
  placeholder?: string;
  onChangeText?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const SearchInput = ({
  onChangeText,
  placeholder = "Search something...",
  value,
}: SearchInputProps) => {
  return (
    <div className="h-9 px-3 gap-x-2 border bg-neutral-50 flex items-center rounded-md">
      <Search size={16} className="text-neutral-500" />
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChangeText}
        className="h-full text-neutral-700 flex-1 text-xs bg-transparent outline-none"
      />
    </div>
  );
};

export default SearchInput;
