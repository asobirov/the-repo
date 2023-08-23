import { api } from '@/utils/api';
import { Button } from '@the-repo/ui';
import { useRouter } from 'next/router';
import { PostItem } from '~/components/post-item';

const DocsPage = () => {
  const router = useRouter();
  const {data, isLoading} = api.user.myPosts.useQuery();

  const createMutation = api.post.create.useMutation({
    onSuccess: (post) => {
      void router.push(`/editor/${post.id}`);
    }
  });

  const handleCreate = () => {
    createMutation.mutate({
      title: "New Post",
      content: {},
    });
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Button onClick={handleCreate} disabled={createMutation.isLoading}>
        Create New Post
      </Button>
      {data?.map((post) => {
        return (
          <PostItem key={post.id} post={post} />
        )
      }
    )} 
    </div>
  );
}

export default DocsPage;