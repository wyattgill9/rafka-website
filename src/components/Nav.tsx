import { useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "border-red-600" : "border-transparent hover:border-red-600";
  return (
    <nav class="bg-red-900">
      <ul class="container flex items-center p-3 text-gray-200">
        <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
          <a href="/">Home</a>
        </li>
        <li class={`border-b-2 ${active("/docs")} mx-1.5 sm:mx-6`}>
          <a href="/docs">Documentation</a>
        </li>
        <li class={`border-b-2 ${active("/examples")} mx-1.5 sm:mx-6`}>
          <a href="/examples">Examples</a>
        </li>
        <li class={`border-b-2 ${active("/github")} mx-1.5 sm:mx-6`}>
          <a href="https://github.com/wyattgill9/rafka" target="_blank">GitHub</a>
        </li>
      </ul>
    </nav>
  );
}
