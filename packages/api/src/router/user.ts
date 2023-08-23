
import { createTRPCRouter, protectedProcedure,  } from "../trpc";

export const userRouter = createTRPCRouter({
  myPosts: protectedProcedure.query(({ ctx }) => {
    const { session } = ctx;

    return ctx.prisma.post.findMany({
      where: {
        authorId: session.user.id,
      },
      select: {
        id: true,
        title: true,
        published: true,
        createdAt: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }),
});
