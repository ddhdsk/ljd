<template>
  <div class="bg-[#F7F9FC]">
    <div class="flex items-center">
      <Icon icon="teenyicons:left-outline" class="ml-[4vw]" />
      <div
        class="flex items-center justify-center w-[100%] pr-[4vw] py-[3vw] bg-[#fff] text-[#010101] text-[4.2vw] font-[600]"
      >
        排行榜
      </div>
    </div>
    <van-tabs v-model:active="active" animated color="#EE0A24">
      <van-tab v-for="region in regions" :title="region" :key="region">
        <div
          class="py-[4vw] px-[4vw]"
          v-if="
            toplist && toplist.length && toplistDetail && toplistDetail.length
          "
        >
          <h1 class="font-semibold text-[5vw] py-[1vw]">榜单推荐</h1>
          <ul class="flex justify-between">
            <li class="relative">
              <img
                :src="toplist[38].coverImgUrl"
                alt=""
                class="w-[28vw] h-[28vw] rounded-md"
              />
              <Icon
                icon="ph:play-fill"
                class="absolute bottom-[2vw] right-[2vw] text-[#fff] text-[5vw]"
              />
            </li>
            <li class="relative">
              <img
                :src="toplist[50].coverImgUrl"
                alt=""
                class="w-[28vw] h-[28vw] rounded-md"
              />
              <Icon
                icon="ph:play-fill"
                class="absolute bottom-[2vw] right-[2vw] text-[#fff] text-[5vw]"
              />
            </li>
            <li class="relative">
              <img
                :src="toplist[25].coverImgUrl"
                alt=""
                class="w-[28vw] h-[28vw] rounded-md"
              />
              <Icon
                icon="ph:play-fill"
                class="absolute bottom-[2vw] right-[2vw] text-[#fff] text-[5vw]"
              />
            </li>
          </ul>
        </div>
        <div class="py-[4vw] px-[4vw]">
          <h2 class="flex items-center">
            <Icon
              icon="simple-icons:neteasecloudmusic"
              class="text-[#EB4D44] pr-[1vw] text-[6vw]"
            />
            <span class="font-semibold">官方版</span>
          </h2>
          <div
            class="bg-[#fff] rounded-xl w-[100%] h-[35vw] mt-[2vw] px-[3vw] py-[3vw]"
            v-for="(item, index) in toplistDetail?.slice(0, 8)"
            :key="index"
          >
            <div class="flex justify-between mb-[2vw]">
              <h2 class="text-[5.5vw] font-semibold">{{ item.name }}</h2>
              <span class="text-[#A6AAB2] text-[10px]">{{
                item.updateFrequency
              }}</span>
            </div>
            <div class="flex justify-between">
              <div class="relative w-[24vw] h-[18vw]">
                <!-- <img
                  :src="playlistTrackAll[0]?.al.picUrl"
                  alt=""
                  class="rounded-xl w-[18vw] h-[18vw] absolute left-[0] z-[1]"
                />
                <img
                  :src="playlistTrackAll[1]?.al.picUrl"
                  alt=""
                  class="rounded-xl w-[15vw] h-[15vw] absolute right-[3vw] bottom-0 opacity-60"
                />
                <img
                  :src="playlistTrackAll[2]?.al.picUrl"
                  alt=""
                  class="rounded-xl w-[12vw] h-[12vw] absolute right-0 bottom-0 opacity-20"
                /> -->
                <pic :picId="item.id"></pic>
              </div>
              <ul class="text-[14px] flex flex-col justify-between">
                <li
                  class="flex justify-between w-[60vw] items-center"
                  v-for="(arr, index) in item.tracks"
                >
                  <span class="pr-[2vw] font-semibold">{{ index + 1 }}</span>
                  <p class="truncate font-semibold w-[49.5vw]">
                    {{ arr.first
                    }}<span class="text-[#9A9EA7] font-normal">
                      - {{ arr.second }}</span
                    >
                  </p>
                  <span class="pl-[2vw] text-[10px] text-[#6BBE98]">新</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="py-[4vw] px-[4vw]"
          v-if="
            toplist && toplist.length && toplistDetail && toplistDetail.length
          "
        >
          <h1 class="font-semibold text-[5vw] py-[1vw]">精选榜</h1>
          <ul class="flex justify-start flex-wrap">
            <li
              class="relative"
              v-for="(item, index) in toplist.slice(0, 11)"
              :key="index"
            >
              <img
                :src="item.coverImgUrl"
                alt=""
                class="w-[28vw] h-[28vw] rounded-md mr-[2.5vw] mb-[2.5vw]"
              />
              <Icon
                icon="ph:play-fill"
                class="absolute bottom-[4vw] right-[4vw] text-[#fff] text-[5vw]"
              />
            </li>
          </ul>
        </div>
        <div
          class="py-[4vw] px-[4vw]"
          v-if="
            toplist && toplist.length && toplistDetail && toplistDetail.length
          "
        >
          <h1 class="font-semibold text-[5vw] py-[1vw]">曲风榜</h1>
          <ul class="flex justify-start flex-wrap">
            <li
              class="relative"
              v-for="(item, index) in toplist.slice(11, 19)"
              :key="index"
            >
              <img
                :src="item.coverImgUrl"
                alt=""
                class="w-[28vw] h-[28vw] rounded-md mr-[2.5vw] mb-[2.5vw]"
              />
              <Icon
                icon="ph:play-fill"
                class="absolute bottom-[4vw] right-[4vw] text-[#fff] text-[5vw]"
              />
            </li>
          </ul>
        </div>
        <div
          class="py-[4vw] px-[4vw]"
          v-if="
            toplist && toplist.length && toplistDetail && toplistDetail.length
          "
        >
          <h1 class="font-semibold text-[5vw] py-[1vw]">全球榜</h1>
          <ul class="flex justify-start flex-wrap">
            <li
              class="relative"
              v-for="(item, index) in toplist.slice(19, 25)"
              :key="index"
            >
              <img
                :src="item.coverImgUrl"
                alt=""
                class="w-[28vw] h-[28vw] rounded-md mr-[2.5vw] mb-[2.5vw]"
              />
              <Icon
                icon="ph:play-fill"
                class="absolute bottom-[4vw] right-[4vw] text-[#fff] text-[5vw]"
              />
            </li>
          </ul>
        </div>
        <div
          class="py-[4vw] px-[4vw]"
          v-if="
            toplist && toplist.length && toplistDetail && toplistDetail.length
          "
        >
          <h1 class="font-semibold text-[5vw] py-[1vw]">语种榜</h1>
          <ul class="flex justify-start flex-wrap">
            <li
              class="relative"
              v-for="(item, index) in toplist.slice(25, 32)"
              :key="index"
            >
              <img
                :src="item.coverImgUrl"
                alt=""
                class="w-[28vw] h-[28vw] rounded-md mr-[2.5vw] mb-[2.5vw]"
              />
              <Icon
                icon="ph:play-fill"
                class="absolute bottom-[4vw] right-[4vw] text-[#fff] text-[5vw]"
              />
            </li>
          </ul>
        </div>
        <div
          class="py-[4vw] px-[4vw]"
          v-if="
            toplist && toplist.length && toplistDetail && toplistDetail.length
          "
        >
          <h1 class="font-semibold text-[5vw] py-[1vw]">特色榜</h1>
          <ul class="flex justify-start flex-wrap">
            <li
              class="relative"
              v-for="(item, index) in toplist.slice(32, 38)"
              :key="index"
            >
              <img
                :src="item.coverImgUrl"
                alt=""
                class="w-[28vw] h-[28vw] rounded-md mr-[2.5vw] mb-[2.5vw]"
              />
              <Icon
                icon="ph:play-fill"
                class="absolute bottom-[4vw] right-[4vw] text-[#fff] text-[5vw]"
              />
            </li>
          </ul>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { useRequest } from "vue-request";
import { getToplist, getToplistDetail } from "@/service";
import pic from "@/components/pic.vue";
const active = ref(0);
const regions = ref(["官方", "精选", "曲风", "全球", "语种"]);

// const params = {
//   id: 19723756, // 必填参数
//   limit: 3, // 可选参数，根据需要修改
// };
const { data: toplist } = useRequest(getToplist, {});
const { data: toplistDetail } = useRequest(getToplistDetail, {});
// const { data: playlistTrackAll } = useRequest(
//   () => getPlaylistTrackAll(params),
//   {}
// );
console.log(toplist);
console.log(toplistDetail);
// console.log(playlistTrackAll);
</script>
<style scoped></style>
