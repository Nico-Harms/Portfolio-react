import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';

export default function PostItem({ post }) {
    return (
      <article className="post-item">
        <h2>{post.title.rendered}</h2>
        {parse(post.content.rendered)}
      </article>
    );
  }
  