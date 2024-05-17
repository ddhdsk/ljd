<template>
  <img
    :src="req?.tracks[0]?.al.picUrl"
    alt=""
    class="rounded-xl w-[18vw] h-[18vw] absolute left-[0] z-[1]"
  />
  <img
    :src="req?.tracks[1]?.al.picUrl"
    alt=""
    class="rounded-xl w-[15vw] h-[15vw] absolute right-[3vw] bottom-0 opacity-60"
  />
  <img
    :src="req?.tracks[2]?.al.picUrl"
    alt=""
    class="rounded-xl w-[12vw] h-[12vw] absolute right-0 bottom-0 opacity-20"
  />
</template>
<script setup lang="ts">
import { getSongListDetails } from "@/service";
import { useRequest } from "vue-request";
interface Props {
  picId: number;
}
const props = withDefaults(defineProps<Props>(), {
  picId: 4455,
});
// console.log(props.picId);
const id = props.picId;
const { data: req } = useRequest(() => getSongListDetails({ id: id }), {});
// console.log(req);
</script>
