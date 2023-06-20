"use client";
import { useState, useEffect, useCallback } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((prompt) => (
        <PromptCard
          key={prompt._id}
          prompt={prompt}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [prompts, setPrompts] = useState([]);
  const [searchPrompts, setSearchPrompts] = useState([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      setPrompts(data);
    };
    fetchPrompts();
  }, []);

  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);

    if (searchText === "") {
      setSearchPrompts([]);
    } else {
      const filteredPrompts = prompts.filter((prompt) => {
        return (
          prompt.prompt.toLowerCase().includes(searchText.toLowerCase()) ||
          prompt.creator.username
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          prompt.tag.toLowerCase().includes(searchText.toLowerCase())
        );
      });
      setSearchPrompts(filteredPrompts);
    }
  };
  const handleTagClick = (tag) => {
    setSearchText(`#${tag}`);
    const filteredPrompts = prompts.filter((prompt) => {
      return prompt.tag.toLowerCase() === tag.toLowerCase();
    });
    setSearchPrompts(filteredPrompts);
  };
  return (
    <section className='feed'>
      <form action='' className='flex w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or username'
          className='search_input peer'
          value={searchText}
          onChange={handleSearchChange}
          required
        />
      </form>
      {searchText ? (
        <PromptCardList data={searchPrompts} handleTagClick={handleTagClick} />
      ) : (
        <PromptCardList data={prompts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
