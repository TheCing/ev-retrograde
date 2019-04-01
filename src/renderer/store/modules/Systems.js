const systems = ['Nintendo Entertainment System',
  'Super Nintendo Entertainment System',
  'Nintendo Gameboy',
  'Sega Genesis',
  'Atari 2600',
  'Atari 5200',
  'Atari 7800',
  'Famicom Disk System',
  'Sega GameGear',
  'Nintendo 64',
  'Neo-Geo Pocket']

const state = {
  currentSystem: systems[0]
}

const mutations = {
  setCurrentSystem (state, id) {
    state.currentSystem = 'test'
  },
  clearCurrentSystem () {
    state.currentSystem = 'All Systems'
  }
}

const actions = {
  setSystem ({ commit }, id) {
    commit('setCurrentSystem', id)
  }
}

export default {
  state,
  mutations,
  actions
}
