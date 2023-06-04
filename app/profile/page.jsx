"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import MyProfile from '@components/MyProfile';

const page = () => {
    const {data:session} = useSession();

    const [posts, setPosts] = useState()

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await response.json();
    
          setPosts(data);
        };
    
        if(session?.user.id) fetchPosts();
      }, []);
    
    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }

    return <MyProfile
        name="My"
        desc="Welcome to your personalized MyProfile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
}

export default page;