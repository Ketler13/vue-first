<template>
  <div>
    <md-dialog md-open-from="#select" md-close-to="#select" ref="excercises">
      <md-dialog-title>Select excercises</md-dialog-title>

      <md-dialog-content>
        <ul class="excercise-handler">
          <new-split-excercise
            v-for="excercise in excercises"
            :excercise="excercise"
            :key="excercise.id"
            @click="handleExcercise($event)"
          >
          </new-split-excercise>
        </ul>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="closeDialog('excercises')">Cancel</md-button>
        <md-button class="md-primary" @click="closeDialog('excercises')">Ok</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-primary md-raised" id="select" @click="openDialog('excercises')">
      Select excercises
    </md-button>

    <chips></chips>
    <button type="button" v-show="submitButtonIsVisible" @click="addSplit">ADD SPLIT</button>
    <new-split-details :details="details">
    </new-split-details>
  </div>
</template>

<script>
  import NewSplitExcercise from './NewSplitExcercise'
  import NewSplitDetails from './NewSplitDetails'
  import Chips from './Chips'

  export default {
    name: 'newsplit',
    components: {
      'new-split-excercise': NewSplitExcercise,
      'new-split-details': NewSplitDetails,
      'chips': Chips
    },
    methods: {
      handleExcercise ({checked, title}) {
        if (checked) {
          this.$store.commit('addExcerciseToSplit', title)
        } else {
          this.$store.commit('removeExcerciseFromSplit', title)
        }
      },
      addSplit () {
        this.$store
          .dispatch('addSplit')
          .then(result => {
            if (result.data.success) {
              this.$store.commit('refreshStore')
              setTimeout(() => this.$router.push({path: '/splits'}), 500)
            }
          })
          .catch(console.error)
      },
      openDialog (ref) {
        this.$refs[ref].open()
      },
      closeDialog (ref) {
        this.$refs[ref].close()
      }
    },
    computed: {
      excercises () {
        return this.$store.state.excercises
      },
      details () {
        return this.$store.state.details
      },
      submitButtonIsVisible () {
        return this.$store.state.excercisesInSplit.length
      }
    },
    mounted () {
      this.$store.state.token && this.$store
        .dispatch('loadExcercises')
    }
  }
</script>

<style scoped>
  .excercise-handler {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-flow: column wrap;
    align-items: stretch;
  }
</style>
