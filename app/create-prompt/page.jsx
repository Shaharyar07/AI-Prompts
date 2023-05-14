"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
const page = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(post, session?.user.id);
    try {
      const res = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
          userId: session?.user.id,
        }),
      });

      if (res.ok) {
        router.push("/");
      }
    } catch (e) {
      throw Error(e.message);
    } finally {
      setIsSubmitting(false);
      setPost({ prompt: "", tag: "" });
    }
  };
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
