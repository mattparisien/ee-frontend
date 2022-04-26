import GETCTA from "../GetCta";

const STATSBLOCK = `
... on ComponentBlocksStatsBlock {
  Heading
  StatsBlockItem {
    Heading
    Line
  }
  StatsBlockOptions: Options {
    StatsBlockTheme: Theme
    DisableGutterTop
    DisableGutterBottom
  }
  ${GETCTA('StatsBlockCta')}
}
`;

export default STATSBLOCK;
