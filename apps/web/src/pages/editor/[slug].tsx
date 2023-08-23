import { useRouter } from "next/router";
import { Editor } from "~/components/editor";
import { api } from "~/utils/api";

const DocPage = () => {
    // get post id from router params
    const {
        query: { slug },
    } = useRouter();

    const { data: post, isLoading, isError } = api.post.byId.useQuery({
        postId: slug as string,
    })

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Something went wrong...</div>;
    }

    if (!post) {
        return <div>Post not found.</div>;
    }

    return (
        <Editor
      post={{
        id: post.id,
        title: post.title,
        content: post.content,
        published: post.published,
      }}
    />
    )
}

export default DocPage;