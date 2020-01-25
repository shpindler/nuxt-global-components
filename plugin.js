/** Глобально регистрирует компоненты из папок components/Global. */

import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

export default () => {
  const requireComponent = require.context('Global')
  requireComponent.keys().forEach(fileName => {
     const componentConfig = requireComponent(fileName)
     const componentName = upperFirst(camelCase(
       fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
     ))
     Vue.component(componentName, componentConfig.default || componentConfig)
  })
}
