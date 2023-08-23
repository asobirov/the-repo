import { z } from "zod";

import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = createTRPCRouter({
  byId: publicProcedure
    .input(z.object({ postId: z.string(), authorId: z.string().optional() }))
    .query(async ({ ctx, input: {
      postId,
      authorId
    } }) => {
      const { session } = ctx;
      const aId = authorId ?? session?.user.id;

      if (!aId) throw new Error('No author provided');

      const post = await ctx.prisma.post.findFirst({
        where: {
          id: postId,
          authorId: aId
        },
      })

      return post;
    }),
  create: protectedProcedure
    .input(
      z.object({
        title: z.string().min(1),
        content: z.any(),
      }),
    )
    .mutation(({ ctx, input: {
      title,
      content
    } }) => {
      const {session} = ctx;

      return ctx.prisma.post.create({
        data: {
          authorId: session.user.id,
          title,
          content
        }
      });
    }),
  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().min(1).optional(),
        content: z.any().optional(),
      }),
    )
    .mutation(({ ctx, input: {
      id,
      title,
      content
    } }) => {
      console.log('id', id);
      return ctx.prisma.post.update({
        where: { id },
        data: {
          title,
          content
        }
      });
    }),
  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.post.delete({ where: { id: input } });
  }),
});
