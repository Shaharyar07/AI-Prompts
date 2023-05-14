"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
const page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const handleSubmit = async (e) => {};
  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      isSubmitting={isSubmitting}
      handleSubmit={handleSubmit}
    />
  );
};

export default page;
