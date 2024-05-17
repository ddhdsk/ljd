import type { RouteRecordRaw } from "vue-router";
import A from "@/views/a.vue";
import B from "@/views/b.vue";
import Search from "@/views/search.vue";
import RankingList from "@/views/rankingList.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/rankingList" },
  { path: "/a", component: A },
  { path: "/b", component: B },
  { path: "/search", component: Search },
  { path: "/rankingList", component: RankingList },
];

export default routes;
