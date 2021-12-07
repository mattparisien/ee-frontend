const deviceSize = {
  mobileS: '320',
  mobileM: '375',
  mobileL: '425',
  tablet: '768',
  laptop: '1024',
  laptopL: '1440',
  desktop: '2560'
}

const device = {
  mobileS: `(max-width: ${deviceSize.mobileS})`,
  mobileM: `(max-width: ${deviceSize.mobileM})`,
  mobileL: `(max-width: ${deviceSize.mobileL})`,
  tablet: `(max-width: ${deviceSize.tablet})`,
  laptop: `(max-width: ${deviceSize.laptop})`,
  laptopL: `(max-width: ${deviceSize.laptopL})`,
  desktop: `(max-width: ${deviceSize.desktop})`,
  desktopL: `(min-width: ${deviceSize.desktop})`
};

export { device, deviceSize }