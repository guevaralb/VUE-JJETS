<template>
  <display v-if="!currentManager" message="Loading... Manager"/>

  <div v-else-if="sameManager">

    <md-toolbar class="md-accent">
      <div class="md-title" style="flex: 1">
       {{currentManager.username | capitalize}}
      </div>
      <span class="hidden-xs">
      <router-link tag="md-button" :to="{name: 'managerItems'}">
       <md-icon>shop</md-icon> Items ({{currentManagerItems | count}})
      </router-link>
      <router-link tag="md-button" :to="{name: 'managerStores'}">
        <md-icon>store</md-icon> Stores ({{currentManagerStores | count}})
      </router-link>
      <router-link tag="md-button" :to="{name: 'managerEmployees'}">
        <md-icon>people</md-icon> Employees ({{currentManagerEmployees | count}})
        ({{currentManagerApplicationMessages | count}})
      </router-link>
      <router-link tag="md-button" :to="{name: 'managerTransactions'}">
        <md-icon>receipt</md-icon> Transactions ({{currentManagerStoresTransactions | count}})
      </router-link>
        </span>
      <span class="visible-xs">
      <router-link tag="md-button" class="md-icon-button" :to="{name: 'managerItems'}">
       <md-icon>shop</md-icon>
      </router-link>
        ({{currentManagerItems | count}})
      <router-link tag="md-button" class="md-icon-button" :to="{name: 'managerStores'}">
        <md-icon>store</md-icon>
      </router-link>
         ({{currentManagerStores | count}})
      <router-link tag="md-button" class="md-icon-button" :to="{name: 'managerEmployees'}">
        <md-icon>people</md-icon>
      </router-link>
         ({{currentManagerEmployees | count}})
                ({{currentManagerApplicationMessages | count}})
              <router-link tag="md-button" class="md-icon-button" :to="{name: 'managerTransactions'}">
        <md-icon>receipt</md-icon>
      </router-link>
         ({{currentManagerStoresTransactions | count}})
        </span>
    </md-toolbar>
    <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
  <display v-else message="You dont own this profile" :noloader="true">
    <template v-if="authManager">
      <router-link tag="md-button" class="md-raised md-accent"
                   :to="{name: 'manager', params: {username: authManager.username}}">
        To Your Manager Profile
      </router-link>
    </template>
    <template v-else>
      <router-link tag="md-button" class="md-raised md-accent"
                   :to="{name: 'user', params: {username: authUser.username}}">
        To Your Account
      </router-link>
    </template>
  </display>

</template>

<script>
  import {mapGetters, mapActions} from 'vuex';
  export default {
    name: 'manager',
    props: ['authManager', 'authUser'],
    data() {
      return {
        currentView: 'Stores',
      }
    },
    computed: {
      ...mapGetters([
        'currentManager',
        'sameManager',
        'currentManagerItems',
        'currentManagerStores',
        'currentManagerEmployees',
        'currentManagerStoresTransactions',
        'currentManagerApplicationMessages'
      ])
    },
  }
</script>

