// src/pages/viewer/FileViewerPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import ViewPost from "../../components/viewer/ViewPost"; // nhớ path

function useQuery() {
  const { search } = useLocation();
  return new URLSearchParams(search);
}

export default function FileViewerPage() {
  const q = useQuery();
  const { user } = useAuth();
  const currentUserId = user?.user_id || user?.id || null;

  return (
    <ViewPost
      postId={q.get("post_id") || q.get("postId")}
      currentUserId={currentUserId}
      backHref={-1}
    />
  );
}
