# Changelog

## [0.0.2](https://github.com/OpenPowerShift/Sysconex/compare/sysconex-v0.0.1...sysconex-v0.0.2) (2026-02-14)


### Features

* add support for background plugins ([f187299](https://github.com/OpenPowerShift/Sysconex/commit/f187299da80d7741817f5cc0735c9a0f5050179b)), closes [#43](https://github.com/OpenPowerShift/Sysconex/issues/43)
* add support for tagName to plugins ([3b06907](https://github.com/OpenPowerShift/Sysconex/commit/3b069078d48951d3ac09159435baab103837d97d)), closes [#40](https://github.com/OpenPowerShift/Sysconex/issues/40)
* add theming ([9f44494](https://github.com/OpenPowerShift/Sysconex/commit/9f4449421ca1f8e6b2ea0225bf8f25dbf3163b99))
* add UpdateNS edit type ([4e36a57](https://github.com/OpenPowerShift/Sysconex/commit/4e36a575e468aa9867050ddc0b4402494e4a6205))
* added stateVersion ([cc8fd47](https://github.com/OpenPowerShift/Sysconex/commit/cc8fd476cc955497bbeaf2afdf8ebb6ef50d5702))
* **demo:** add remote open and save plugins ([798fc93](https://github.com/OpenPowerShift/Sysconex/commit/798fc93333408bf56d350e5130734c5d60d5657c))
* edit multiple open files ([88bd287](https://github.com/OpenPowerShift/Sysconex/commit/88bd2878e093763d4d848ed2dd0a0baa8421ae47))
* **editing:** add editing user interface elements ([e834e4d](https://github.com/OpenPowerShift/Sysconex/commit/e834e4d0853e3cd2e2a2ce9d74120c4d06ce92bd))
* **editing:** insert and remove nodes ([65c99da](https://github.com/OpenPowerShift/Sysconex/commit/65c99da931aa88c527504a362353da0ac443a23e))
* **editing:** open documents ([e3a3199](https://github.com/OpenPowerShift/Sysconex/commit/e3a31999046a29a7aa44467f9b7a7fde784b982f))
* **editing:** update elements' attributes ([b29eff0](https://github.com/OpenPowerShift/Sysconex/commit/b29eff04cdc9d14d9f002f183eeb51f7f6adaac9))
* export open-scd and mixin types ([5415d2b](https://github.com/OpenPowerShift/Sysconex/commit/5415d2b283e15870fb3d4eec32ec630fd174b28b))
* fix npm publishing ([15f10d1](https://github.com/OpenPowerShift/Sysconex/commit/15f10d1f4284fea1fa625505e8305e1f3a09bdbd))
* **foundation:** export cyrb64 hash function ([5b13d94](https://github.com/OpenPowerShift/Sysconex/commit/5b13d9466becc2f0922164b806f77d8f01a234ab))
* make it ours ([d69268d](https://github.com/OpenPowerShift/Sysconex/commit/d69268d524f16a5f7a1a9cf84f1bd692badc1f1b))
* migrate to EditV2 (oscd-api + oscd-editor) ([dae94cf](https://github.com/OpenPowerShift/Sysconex/commit/dae94cf172954cd5270949480ff85b1d0a3b469a))
* migrated UI to new oscd-ui ([ae99e24](https://github.com/OpenPowerShift/Sysconex/commit/ae99e24fda427e81bfd6088f5889ea44aa410478))
* **open-scd:** pass editCount to editor and menu plugins ([2be53ab](https://github.com/OpenPowerShift/Sysconex/commit/2be53ab8de8bad176097153240441db521b99ce8))
* **plugging:** load menu and editor plugins ([e3fe982](https://github.com/OpenPowerShift/Sysconex/commit/e3fe98223cefd7b3a9abd49c444f5bfba3c527a8))
* refactor oscd-shell to fully support scoped custom elements ([77a5bea](https://github.com/OpenPowerShift/Sysconex/commit/77a5beac60e401f85e15d01ac3d8b6457ddb6c4a))
* remove edit v1 support - handled by  oscd-background-editv1 ([1902858](https://github.com/OpenPowerShift/Sysconex/commit/19028581aa54d32e0732d6fb2fe4593968d70679)), closes [#52](https://github.com/OpenPowerShift/Sysconex/issues/52)
* remove support for active flag in plugin definition ([c1c1195](https://github.com/OpenPowerShift/Sysconex/commit/c1c119500f1df0237eb972a5da88d1af6835c54e)), closes [#39](https://github.com/OpenPowerShift/Sysconex/issues/39)
* stateVersion should be docVersion ([a40c701](https://github.com/OpenPowerShift/Sysconex/commit/a40c70112a0396442b3b94a22c01b896c30b7b92)), closes [#71](https://github.com/OpenPowerShift/Sysconex/issues/71)
* support rendering without appIcon ([903b690](https://github.com/OpenPowerShift/Sysconex/commit/903b690e0d91ca6a6c352d1a0104d3096ce693a9))
* switch shell to using scoped components ([4ec3ffa](https://github.com/OpenPowerShift/Sysconex/commit/4ec3ffa2fa9a454646bcda314abe168da6693337))
* update tooling and all module deps ([d6b6bf8](https://github.com/OpenPowerShift/Sysconex/commit/d6b6bf868afa2f950cc2be8025c5cd2d806621dd))
* update UI to new design ([edb8b29](https://github.com/OpenPowerShift/Sysconex/commit/edb8b296aed487c04dafe85e0578194f56ce7ce6))


### Bug Fixes

* adjust tests after updating modules ([7cf82cb](https://github.com/OpenPowerShift/Sysconex/commit/7cf82cb61720900bcb8814e60faf2f1c0fd9865f))
* broken demo on bundle ([1d6a72d](https://github.com/OpenPowerShift/Sysconex/commit/1d6a72d288da4eb8dff6a619e2d219f9c1a2d151))
* broken npm build ([8bbc236](https://github.com/OpenPowerShift/Sysconex/commit/8bbc236e7fdd61121de0c469bc17a99535a94f59))
* change all theme references to use --oscd-theme-* ([e169ade](https://github.com/OpenPowerShift/Sysconex/commit/e169ade3b3244c63cfbc6ceb768ec17b7767a054))
* change locale and docName from plugin attrs to props ([ed4f4cb](https://github.com/OpenPowerShift/Sysconex/commit/ed4f4cb100e547492cdef121a7e175113550b3e6))
* correct issues with bundling, so shell can be used from a uri pointing to a bundle ([2d728ae](https://github.com/OpenPowerShift/Sysconex/commit/2d728ae8e19f02bb58364854e21c3e40ca4b4e6a))
* correct path issues with dyn loaded locales ([6efd5ae](https://github.com/OpenPowerShift/Sysconex/commit/6efd5ae0596abedecd98d1bedb30e17efda63a12))
* handleEditEventV2 should respect squash and title ([62e21d3](https://github.com/OpenPowerShift/Sysconex/commit/62e21d3d1d342c60206bdcc5981905b21b05eb70))
* **open-scd:** allow menu plugins to show content ([c7dc849](https://github.com/OpenPowerShift/Sysconex/commit/c7dc849fa84419ab605ffafd2b0ec7ce40136fc3))
* **open-scd:** hide menu plugin element container ([02b026e](https://github.com/OpenPowerShift/Sysconex/commit/02b026e645ebfa9c26f54afd5f292a10b56af7ef))
* **open-scd:** import locales from relative URL ([5877314](https://github.com/OpenPowerShift/Sysconex/commit/5877314f5e2de4c3613324e51328cb463dec2d5d))
* **package:** localize as part of bundle script ([653a506](https://github.com/OpenPowerShift/Sysconex/commit/653a50667163e9a9381d26ccb10e927f0758ec73))
* **plugging:** import relative paths from origin ([abb5074](https://github.com/OpenPowerShift/Sysconex/commit/abb50749877ce611e4eb58bcde2e39280c429150))
* set default them colors using omicron color palette ([1cbba92](https://github.com/OpenPowerShift/Sysconex/commit/1cbba926b4f0554de4c0489693d5b9f1116ab6a5))
* update to the latest oscd-editor to fix undo/redo issues ([16cf2ed](https://github.com/OpenPowerShift/Sysconex/commit/16cf2edf799c37f3141f83ccc4795eb5e3a513c9))


### Styles

* disable quirks mode in demo and tests ([db1b6c8](https://github.com/OpenPowerShift/Sysconex/commit/db1b6c858a97f6842526aa624311d9d1842dfc49))
* improve default theme contrast ([277840b](https://github.com/OpenPowerShift/Sysconex/commit/277840bc623ffd5adaa76215ff6ab094fa25fe29))
