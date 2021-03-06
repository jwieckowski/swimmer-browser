import Vue from 'vue'
import Router from 'vue-router'

import FilterContent from '../components/FilterContent'
import HomePage from '../components/HomePage'
import Results from '../components/Results'
import SwimmerDetails from '../components/SwimmerDetails'
import SelectionPage from '../components/SelectionPage'
import SelectionResults from '../components/SelectionResults'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomePage
    },
    {
      path: '/filters',
      name: 'filter-content',
      component: FilterContent
    },
    {
      path: '/results',
      name: 'results',
      component: Results
    },
    {
      path: '/details/:id',
      name: 'swimmer-details',
      component: SwimmerDetails
    },
    {
      path: '/selection',
      name: 'selection-page',
      component: SelectionPage
    },
    {
      path: '/lineup',
      name: 'selection-results',
      component: SelectionResults
    }
  ]
})
