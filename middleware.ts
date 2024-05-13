import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const procetcetRoutes = createRouteMatcher([
  '/',
  '/credits',
  '/profile',
  '/transformations(.*)',
  '/transformations(.*)/update',
  '/transformations/add/restore',
  '/transformations/add/fill',
  '/transformations/add/remove',
  '/transformations/add/recolor',
  '/transformations/add/removeBackground',

])



export default clerkMiddleware((auth, req) => {
  if(procetcetRoutes(req)) auth().protect();
  
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};