<template>
  <transition name="fade" mode="out-in">
    <div
      v-if="deletedEmployee"
      class="
        inline-flex
        items-center
        bg-white
        leading-none
        text-purple-600
        rounded-full
        p-2
        shadow
        text-teal text-sm
        fixed
        bottom-10
      "
    >
      <span class="inline-flex px-2 leading-relaxed">{{
        `Deleted ${deletedEmployee.lastName} ${deletedEmployee.firstName}. Do you wish to restore data?`
      }}</span>
      <button
        @click="restoreEmployee"
        class="
          inline-flex
          bg-indigo-600
          text-white
          rounded-full
          h-6
          px-3
          justify-center
          items-center
        "
      >
        Restore
      </button>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "CancelDeletionPopup",
  created() {
    if (this.deletedEmployee) this.clearDeleted();
  },
  updated() {
    console.log(this.deletedEmployee);
  },
  computed: {
    ...mapState({
      deletedEmployee: (state) => state.recover.deleted.employee,
    }),
  },
  methods: {
    ...mapActions(["restoreEmployee", "clearDeleted"]),
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
