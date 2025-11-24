import { plugin } from 'bun';
import UnpluginTypia from '@kennethwkz/unplugin-typia/bun';
import { isCI } from "std-env";

plugin(UnpluginTypia({
  cache: isCI,
  log: 'verbose'
}))
