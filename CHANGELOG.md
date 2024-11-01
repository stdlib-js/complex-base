# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2024-11-01)

<section class="packages">

### Packages

</section>

<!-- /.packages -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`abf0407`](https://github.com/stdlib-js/stdlib/commit/abf040787f6598438b0100a729a8331b7f80f62f) - **chore:** resolve lint errors in TS files _(by Philipp Burckhardt)_
-   [`58f787f`](https://github.com/stdlib-js/stdlib/commit/58f787fa43b56f5c5480542d6f91f5038574dbfb) - **chore:** use ComplexLike type _(by Philipp Burckhardt)_
-   [`6e9f42e`](https://github.com/stdlib-js/stdlib/commit/6e9f42e4c912485d9896eaa16c88b70fd3688e97) - **docs:** harmonize list formatting in repl.txt and ensure starting newline _(by Philipp Burckhardt)_
-   [`ed44fee`](https://github.com/stdlib-js/stdlib/commit/ed44feecb9eaa5e0849d1a533e5415624d0aa338) - **style:** use imperative in package.json description and end with period _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-07-27)

<section class="packages">

### Packages

<section class="package" id="complex-base-v0.3.0">

#### [@stdlib/complex/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base)

<details>

<section class="features">

##### Features

-   [`3edcfe5`](https://github.com/stdlib-js/stdlib/commit/3edcfe5d814fd12a56dbe492ddc78663721f5acd) - update namespace TypeScript declarations [(#2303)](https://github.com/stdlib-js/stdlib/pull/2303)

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`de703af`](https://github.com/stdlib-js/stdlib/commit/de703afc520c9bae446c5b9de9357dc23e047647): remove `complex/base/assert` namespace

    -   To migrate, users should use the `complex/float32/base/assert` and
        `complex/float64/base/assert` namespaces.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-v0.3.0">

#### [@stdlib/complex/base/assert](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`de703af`](https://github.com/stdlib-js/stdlib/commit/de703afc520c9bae446c5b9de9357dc23e047647): remove `complex/base/assert` namespace

    -   To migrate, users should use the `complex/float32/base/assert` and
        `complex/float64/base/assert` namespaces.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-equal-v0.3.0">

#### [@stdlib/complex/base/assert/is-equal](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-equal)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`0be60c5`](https://github.com/stdlib-js/stdlib/commit/0be60c5b5c2136ca09e4dfd2edd5efdaf3bb2423): remove `complex/base/assert/is-equal`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float64/base/assert/is-equal` which provides the
        same API and implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-equalf-v0.3.0">

#### [@stdlib/complex/base/assert/is-equalf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-equalf)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`f6c3671`](https://github.com/stdlib-js/stdlib/commit/f6c3671093e29616c7da3347bb311ff8007daba4): remove `complex/base/assert/is-equalf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float32/base/assert/is-equal` which provides the
        same API and implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-not-equal-v0.3.0">

#### [@stdlib/complex/base/assert/is-not-equal](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-not-equal)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`866b939`](https://github.com/stdlib-js/stdlib/commit/866b93963b9ba84407c36b19514aba6ab55489b8): remove `complex/base/assert/is-not-equal`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float64/base/assert/is-not-equal` which provides the
        same API and implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-not-equalf-v0.3.0">

#### [@stdlib/complex/base/assert/is-not-equalf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-not-equalf)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`33db937`](https://github.com/stdlib-js/stdlib/commit/33db9374d77760cc20b4f025b6582af7138eda33): remove `complex/base/assert/is-not-equalf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float32/base/assert/is-not-equal` which provides the
        same API and implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-same-value-v0.3.0">

#### [@stdlib/complex/base/assert/is-same-value](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-same-value)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`155251c`](https://github.com/stdlib-js/stdlib/commit/155251c40cd609f0f667b98834ef3244c9621405): remove `complex/base/assert/is-same-value`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float64/base/assert/is-same-value` which provides the
        same API and implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-same-value-zero-v0.3.0">

#### [@stdlib/complex/base/assert/is-same-value-zero](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-same-value-zero)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`fd52b0d`](https://github.com/stdlib-js/stdlib/commit/fd52b0da91cb5aa49d287b0ee984fd1e0063e6ab): remove `complex/base/assert/is-same-value-zero`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float64/base/assert/is-same-value-zero` which provides the
        same API and implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-same-value-zerof-v0.3.0">

#### [@stdlib/complex/base/assert/is-same-value-zerof](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-same-value-zerof)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`a391a4c`](https://github.com/stdlib-js/stdlib/commit/a391a4c422edfa112a686ccfee71390ae32f9edd): remove `complex/base/assert/is-same-value-zerof`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float32/base/assert/is-same-value` which provides the
        same API and implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-same-valuef-v0.3.0">

#### [@stdlib/complex/base/assert/is-same-valuef](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-same-valuef)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`91ac840`](https://github.com/stdlib-js/stdlib/commit/91ac840a8f3afd034c16b44ecc441949f70f422b): remove `complex/base/assert/is-same-valuef`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float32/base/assert/is-same-value` which provides the
        same API and implementation.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-parse-v0.3.0">

#### [@stdlib/complex/base/parse](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/parse)

<details>

<section class="features">

##### Features

-   [`4c6159f`](https://github.com/stdlib-js/stdlib/commit/4c6159fab9d6bd415068072dccc8bd8bfcb6c18c) - add `complex/base/parse` [(#1385)](https://github.com/stdlib-js/stdlib/pull/1385 )

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`866b939`](https://github.com/stdlib-js/stdlib/commit/866b93963b9ba84407c36b19514aba6ab55489b8): remove `complex/base/assert/is-not-equal`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float64/base/assert/is-not-equal` which provides the
        same API and implementation.

-   [`33db937`](https://github.com/stdlib-js/stdlib/commit/33db9374d77760cc20b4f025b6582af7138eda33): remove `complex/base/assert/is-not-equalf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float32/base/assert/is-not-equal` which provides the
        same API and implementation.

-   [`f6c3671`](https://github.com/stdlib-js/stdlib/commit/f6c3671093e29616c7da3347bb311ff8007daba4): remove `complex/base/assert/is-equalf`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float32/base/assert/is-equal` which provides the
        same API and implementation.

-   [`155251c`](https://github.com/stdlib-js/stdlib/commit/155251c40cd609f0f667b98834ef3244c9621405): remove `complex/base/assert/is-same-value`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float64/base/assert/is-same-value` which provides the
        same API and implementation.

-   [`fd52b0d`](https://github.com/stdlib-js/stdlib/commit/fd52b0da91cb5aa49d287b0ee984fd1e0063e6ab): remove `complex/base/assert/is-same-value-zero`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float64/base/assert/is-same-value-zero` which provides the
        same API and implementation.

-   [`a391a4c`](https://github.com/stdlib-js/stdlib/commit/a391a4c422edfa112a686ccfee71390ae32f9edd): remove `complex/base/assert/is-same-value-zerof`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float32/base/assert/is-same-value` which provides the
        same API and implementation.

-   [`de703af`](https://github.com/stdlib-js/stdlib/commit/de703afc520c9bae446c5b9de9357dc23e047647): remove `complex/base/assert` namespace

    -   To migrate, users should use the `complex/float32/base/assert` and
        `complex/float64/base/assert` namespaces.

-   [`91ac840`](https://github.com/stdlib-js/stdlib/commit/91ac840a8f3afd034c16b44ecc441949f70f422b): remove `complex/base/assert/is-same-valuef`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float32/base/assert/is-same-value` which provides the
        same API and implementation.

-   [`0be60c5`](https://github.com/stdlib-js/stdlib/commit/0be60c5b5c2136ca09e4dfd2edd5efdaf3bb2423): remove `complex/base/assert/is-equal`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/complex-float64/base/assert/is-equal` which provides the
        same API and implementation.

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt
-   Spandan Barve

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`b9703b5`](https://github.com/stdlib-js/stdlib/commit/b9703b569dc2f0a67e604e388a0d188b08138b48) - **refactor:** update paths _(by Athan Reines)_
-   [`8d4c46b`](https://github.com/stdlib-js/stdlib/commit/8d4c46b10ca912401e0ff0caa37a17cd3c443c2f) - **refactor:** update paths _(by Athan Reines)_
-   [`18b3c79`](https://github.com/stdlib-js/stdlib/commit/18b3c79c5035c7082618b7379cd6576e64393a96) - **refactor:** update paths _(by Athan Reines)_
-   [`659f752`](https://github.com/stdlib-js/stdlib/commit/659f752db18317bf5fc237fdbcad0d74b61e1ed9) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`c3ebfa8`](https://github.com/stdlib-js/stdlib/commit/c3ebfa80e311db338b171ebf8eb5f46bc66e9bf6) - **docs:** update namespace table of contents and address spelling errors _(by Philipp Burckhardt)_
-   [`3edcfe5`](https://github.com/stdlib-js/stdlib/commit/3edcfe5d814fd12a56dbe492ddc78663721f5acd) - **feat:** update namespace TypeScript declarations [(#2303)](https://github.com/stdlib-js/stdlib/pull/2303) _(by stdlib-bot, Athan Reines)_
-   [`3a3b1e0`](https://github.com/stdlib-js/stdlib/commit/3a3b1e08f73a54c5ee46d73045805aee0bb1196d) - **docs:** update package URLs [(#2269)](https://github.com/stdlib-js/stdlib/pull/2269) _(by stdlib-bot)_
-   [`8089b88`](https://github.com/stdlib-js/stdlib/commit/8089b886a4d7d89f15abb068b1021d93f9c4f64e) - **docs:** update paths _(by Athan Reines)_
-   [`038b199`](https://github.com/stdlib-js/stdlib/commit/038b199c32842c02cf678e3ae8305a17aacda05e) - **docs:** update paths _(by Athan Reines)_
-   [`866b939`](https://github.com/stdlib-js/stdlib/commit/866b93963b9ba84407c36b19514aba6ab55489b8) - **remove:** remove `complex/base/assert/is-not-equal` _(by Athan Reines)_
-   [`33db937`](https://github.com/stdlib-js/stdlib/commit/33db9374d77760cc20b4f025b6582af7138eda33) - **remove:** remove `complex/base/assert/is-not-equalf` _(by Athan Reines)_
-   [`f6c3671`](https://github.com/stdlib-js/stdlib/commit/f6c3671093e29616c7da3347bb311ff8007daba4) - **remove:** remove `complex/base/assert/is-equalf` _(by Athan Reines)_
-   [`155251c`](https://github.com/stdlib-js/stdlib/commit/155251c40cd609f0f667b98834ef3244c9621405) - **remove:** remove `complex/base/assert/is-same-value` _(by Athan Reines)_
-   [`fd52b0d`](https://github.com/stdlib-js/stdlib/commit/fd52b0da91cb5aa49d287b0ee984fd1e0063e6ab) - **remove:** remove `complex/base/assert/is-same-value-zero` _(by Athan Reines)_
-   [`a391a4c`](https://github.com/stdlib-js/stdlib/commit/a391a4c422edfa112a686ccfee71390ae32f9edd) - **remove:** remove `complex/base/assert/is-same-value-zerof` _(by Athan Reines)_
-   [`de703af`](https://github.com/stdlib-js/stdlib/commit/de703afc520c9bae446c5b9de9357dc23e047647) - **remove:** remove `complex/base/assert` namespace _(by Athan Reines)_
-   [`91ac840`](https://github.com/stdlib-js/stdlib/commit/91ac840a8f3afd034c16b44ecc441949f70f422b) - **remove:** remove `complex/base/assert/is-same-valuef` _(by Athan Reines)_
-   [`e20ba77`](https://github.com/stdlib-js/stdlib/commit/e20ba77de9ecf13d82630e3d88e014af0aed5a5b) - **docs:** update path _(by Athan Reines)_
-   [`32fd387`](https://github.com/stdlib-js/stdlib/commit/32fd3872225d598d3c29eeb1c837641a85d21364) - **docs:** update paths _(by Athan Reines)_
-   [`0be60c5`](https://github.com/stdlib-js/stdlib/commit/0be60c5b5c2136ca09e4dfd2edd5efdaf3bb2423) - **remove:** remove `complex/base/assert/is-equal` _(by Athan Reines)_
-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - **fix:** update include paths _(by Athan Reines)_
-   [`75d4f83`](https://github.com/stdlib-js/stdlib/commit/75d4f83cb85610d23a04dc21a03f8075f6d3665f) - **refactor:** update require and include paths _(by Athan Reines)_
-   [`63d1de7`](https://github.com/stdlib-js/stdlib/commit/63d1de749b7277c6974cad2c078dfe1caa589063) - **chore:** change to relative require path and fix code style _(by Philipp Burckhardt)_
-   [`57e8762`](https://github.com/stdlib-js/stdlib/commit/57e87620ec449ad73b884e3b4850537df0c494fe) - **chore:** change to relative require paths and fix code style _(by Philipp Burckhardt)_
-   [`a9bf096`](https://github.com/stdlib-js/stdlib/commit/a9bf0960cff2227ff551671eb2de9e00e7c9851c) - **chore:** use relative paths for internal requires _(by Philipp Burckhardt)_
-   [`4c6159f`](https://github.com/stdlib-js/stdlib/commit/4c6159fab9d6bd415068072dccc8bd8bfcb6c18c) - **feat:** add `complex/base/parse` [(#1385)](https://github.com/stdlib-js/stdlib/pull/1385 ) _(by Spandan Barve, Athan Reines, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="packages">

### Packages

<section class="package" id="complex-base-v0.2.0">

#### [@stdlib/complex/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base)

<details>

<section class="features">

##### Features

-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287)
-   [`81b94bd`](https://github.com/stdlib-js/stdlib/commit/81b94bd0f572f1108a8ea5a7d15cd1e14ebbb362) - add `assert` to namespace and fix description

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-v0.2.0">

#### [@stdlib/complex/base/assert](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert)

<details>

<section class="features">

##### Features

-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287)
-   [`5ca21f2`](https://github.com/stdlib-js/stdlib/commit/5ca21f212ae936776a49b61f4fc8d24c74877d03) - add `isSameValueZerof` to namespace
-   [`7edde5e`](https://github.com/stdlib-js/stdlib/commit/7edde5e9f4126c2d11021323cfbf501219f32c00) - add `isSameValueZero` to namespace
-   [`bb1ec6e`](https://github.com/stdlib-js/stdlib/commit/bb1ec6e76a828f09c412b7ae32118a530495622f) - add `isSameValuef` to namespace
-   [`f6ff2c1`](https://github.com/stdlib-js/stdlib/commit/f6ff2c14adc722b42e6a548835b1f7a3e8ca6de9) - add `isSameValue` to namespace
-   [`dc81423`](https://github.com/stdlib-js/stdlib/commit/dc814231dc13b326ee14a7b250dd76c919b1ad86) - add `isNotEqualf` to namespace
-   [`79dad80`](https://github.com/stdlib-js/stdlib/commit/79dad80ed450b07fbb37382bd33b197273bc0fff) - add `isNotEqual` to namespace
-   [`c084c0b`](https://github.com/stdlib-js/stdlib/commit/c084c0b26456c92cda8dbe3f0bf93ae4c32260bf) - add `complex/base/assert`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-equal-v0.2.0">

#### [@stdlib/complex/base/assert/is-equal](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-equal)

<details>

<section class="features">

##### Features

-   [`02bad1a`](https://github.com/stdlib-js/stdlib/commit/02bad1a684640693a46819992f8935ffc7b203e1) - add `complex/base/assert/is-equal`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`07e2d74`](https://github.com/stdlib-js/stdlib/commit/07e2d747623f859101c8542655e76a61e8f742f2) - rename C APIs to align with `@stdlib/number-*` conventions
-   [`d7296b0`](https://github.com/stdlib-js/stdlib/commit/d7296b0cec2d377442b6ae03ae1b75b558860216) - update include path

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-equalf-v0.2.0">

#### [@stdlib/complex/base/assert/is-equalf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-equalf)

<details>

<section class="features">

##### Features

-   [`59fb1e6`](https://github.com/stdlib-js/stdlib/commit/59fb1e66b6d1ed34cf97d8240840aa26ca1f2e44) - add `complex/base/assert/is-equalf`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`07e2d74`](https://github.com/stdlib-js/stdlib/commit/07e2d747623f859101c8542655e76a61e8f742f2) - rename C APIs to align with `@stdlib/number-*` conventions

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-not-equal-v0.2.0">

#### [@stdlib/complex/base/assert/is-not-equal](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-not-equal)

<details>

<section class="features">

##### Features

-   [`875311c`](https://github.com/stdlib-js/stdlib/commit/875311c68a4ea8e012242f57d4a27ace4f18c314) - add `complex/base/assert/is-not-equal`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`07e2d74`](https://github.com/stdlib-js/stdlib/commit/07e2d747623f859101c8542655e76a61e8f742f2) - rename C APIs to align with `@stdlib/number-*` conventions

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-not-equalf-v0.2.0">

#### [@stdlib/complex/base/assert/is-not-equalf](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-not-equalf)

<details>

<section class="features">

##### Features

-   [`190fd03`](https://github.com/stdlib-js/stdlib/commit/190fd0318fe6d0c62300df3d5c8c053b784e9634) - add `complex/base/assert/is-not-equalf`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`07e2d74`](https://github.com/stdlib-js/stdlib/commit/07e2d747623f859101c8542655e76a61e8f742f2) - rename C APIs to align with `@stdlib/number-*` conventions

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-same-value-v0.2.0">

#### [@stdlib/complex/base/assert/is-same-value](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-same-value)

<details>

<section class="features">

##### Features

-   [`28a9723`](https://github.com/stdlib-js/stdlib/commit/28a97234bc4c69e7d384cd9b5b9a72d13a7ed66d) - add `complex/base/assert/is-same-value`

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`ed7fbf1`](https://github.com/stdlib-js/stdlib/commit/ed7fbf13dd9bddb93a5588bdaf5fa78ad7a68f99) - rename C APIs to align with `@stdlib/number-*` conventions

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-same-value-zero-v0.2.0">

#### [@stdlib/complex/base/assert/is-same-value-zero](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-same-value-zero)

<details>

<section class="features">

##### Features

-   [`9f459e9`](https://github.com/stdlib-js/stdlib/commit/9f459e9df86e092665a81c8b51b5c87d4d436bc7) - add `complex/base/assert/is-same-value-zero`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-same-value-zerof-v0.2.0">

#### [@stdlib/complex/base/assert/is-same-value-zerof](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-same-value-zerof)

<details>

<section class="features">

##### Features

-   [`14d1d3d`](https://github.com/stdlib-js/stdlib/commit/14d1d3da0bd9dbee4e3b1268364acf227d1cfec1) - add `complex/base/assert/is-same-value-zerof`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-assert-is-same-valuef-v0.2.0">

#### [@stdlib/complex/base/assert/is-same-valuef](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/assert/is-same-valuef)

<details>

<section class="features">

##### Features

-   [`35895a3`](https://github.com/stdlib-js/stdlib/commit/35895a393721b953a5d00219047a5d0417985520) - add `complex/base/assert/is-same-valuef`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - **feat:** update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287) _(by stdlib-bot, Athan Reines)_
-   [`322d1ca`](https://github.com/stdlib-js/stdlib/commit/322d1cac1bb150c548b5ad3b3086acd8e74a7bbd) - **docs:** update namespace table of contents [(#1284)](https://github.com/stdlib-js/stdlib/pull/1284) _(by stdlib-bot, Philipp Burckhardt)_
-   [`442fbfc`](https://github.com/stdlib-js/stdlib/commit/442fbfc181ef5859b67bdfad43dbe998ad07783e) - **docs:** update Markdown stdlib package URLs [(#1274)](https://github.com/stdlib-js/stdlib/pull/1274) _(by stdlib-bot)_
-   [`14b7db2`](https://github.com/stdlib-js/stdlib/commit/14b7db2b102ce54a583b490554cbbdb4813aa62d) - **docs:** update link _(by Athan Reines)_
-   [`a3f3058`](https://github.com/stdlib-js/stdlib/commit/a3f3058c7660f81f0e83b35732fd7bf385ea9f0e) - **docs:** update link _(by Athan Reines)_
-   [`5ca21f2`](https://github.com/stdlib-js/stdlib/commit/5ca21f212ae936776a49b61f4fc8d24c74877d03) - **feat:** add `isSameValueZerof` to namespace _(by Athan Reines)_
-   [`14d1d3d`](https://github.com/stdlib-js/stdlib/commit/14d1d3da0bd9dbee4e3b1268364acf227d1cfec1) - **feat:** add `complex/base/assert/is-same-value-zerof` _(by Athan Reines)_
-   [`17a73cd`](https://github.com/stdlib-js/stdlib/commit/17a73cdf0cfa67d9b19c0922027fbb05dffd6053) - **docs:** fix copy _(by Athan Reines)_
-   [`4cf9064`](https://github.com/stdlib-js/stdlib/commit/4cf90647739905687707739bf44727d622c3cd3f) - **docs:** update note _(by Athan Reines)_
-   [`7edde5e`](https://github.com/stdlib-js/stdlib/commit/7edde5e9f4126c2d11021323cfbf501219f32c00) - **feat:** add `isSameValueZero` to namespace _(by Athan Reines)_
-   [`9f459e9`](https://github.com/stdlib-js/stdlib/commit/9f459e9df86e092665a81c8b51b5c87d4d436bc7) - **feat:** add `complex/base/assert/is-same-value-zero` _(by Athan Reines)_
-   [`01e4fb4`](https://github.com/stdlib-js/stdlib/commit/01e4fb4948cef7c6eb32ae195e1abb696e7f8e59) - **docs:** fix typo _(by Athan Reines)_
-   [`d2ce216`](https://github.com/stdlib-js/stdlib/commit/d2ce21614afceb840bc7d8aae4f398aa154fa2f9) - **docs:** fix typo _(by Athan Reines)_
-   [`bb1ec6e`](https://github.com/stdlib-js/stdlib/commit/bb1ec6e76a828f09c412b7ae32118a530495622f) - **feat:** add `isSameValuef` to namespace _(by Athan Reines)_
-   [`35895a3`](https://github.com/stdlib-js/stdlib/commit/35895a393721b953a5d00219047a5d0417985520) - **feat:** add `complex/base/assert/is-same-valuef` _(by Athan Reines)_
-   [`5ef4279`](https://github.com/stdlib-js/stdlib/commit/5ef42795874e36a4c08ad3dce6d9555b27c7b04d) - **docs:** fix description _(by Athan Reines)_
-   [`12f0c7e`](https://github.com/stdlib-js/stdlib/commit/12f0c7e26b231f785b1bc640691b0aa70243b673) - **refactor:** use base float64 utility _(by Athan Reines)_
-   [`39ff9ab`](https://github.com/stdlib-js/stdlib/commit/39ff9abe1bd64e8ecea833c40740c26df7fddc60) - **chore:** fix copyright year _(by Athan Reines)_
-   [`07e2d74`](https://github.com/stdlib-js/stdlib/commit/07e2d747623f859101c8542655e76a61e8f742f2) - **fix:** rename C APIs to align with `@stdlib/number-*` conventions _(by Athan Reines)_
-   [`ed7fbf1`](https://github.com/stdlib-js/stdlib/commit/ed7fbf13dd9bddb93a5588bdaf5fa78ad7a68f99) - **fix:** rename C APIs to align with `@stdlib/number-*` conventions _(by Athan Reines)_
-   [`e8283f2`](https://github.com/stdlib-js/stdlib/commit/e8283f28b3212456fd6179d94f0d0de8e195780e) - **style:** fix alignment _(by Athan Reines)_
-   [`f6ff2c1`](https://github.com/stdlib-js/stdlib/commit/f6ff2c14adc722b42e6a548835b1f7a3e8ca6de9) - **feat:** add `isSameValue` to namespace _(by Athan Reines)_
-   [`28a9723`](https://github.com/stdlib-js/stdlib/commit/28a97234bc4c69e7d384cd9b5b9a72d13a7ed66d) - **feat:** add `complex/base/assert/is-same-value` _(by Athan Reines)_
-   [`dc81423`](https://github.com/stdlib-js/stdlib/commit/dc814231dc13b326ee14a7b250dd76c919b1ad86) - **feat:** add `isNotEqualf` to namespace _(by Athan Reines)_
-   [`190fd03`](https://github.com/stdlib-js/stdlib/commit/190fd0318fe6d0c62300df3d5c8c053b784e9634) - **feat:** add `complex/base/assert/is-not-equalf` _(by Athan Reines)_
-   [`79dad80`](https://github.com/stdlib-js/stdlib/commit/79dad80ed450b07fbb37382bd33b197273bc0fff) - **feat:** add `isNotEqual` to namespace _(by Athan Reines)_
-   [`875311c`](https://github.com/stdlib-js/stdlib/commit/875311c68a4ea8e012242f57d4a27ace4f18c314) - **feat:** add `complex/base/assert/is-not-equal` _(by Athan Reines)_
-   [`38f7e94`](https://github.com/stdlib-js/stdlib/commit/38f7e94d05a500c6aae609e4b11232d5db35c08e) - **docs:** fix include path _(by Athan Reines)_
-   [`d7296b0`](https://github.com/stdlib-js/stdlib/commit/d7296b0cec2d377442b6ae03ae1b75b558860216) - **fix:** update include path _(by Athan Reines)_
-   [`81b94bd`](https://github.com/stdlib-js/stdlib/commit/81b94bd0f572f1108a8ea5a7d15cd1e14ebbb362) - **feat:** add `assert` to namespace and fix description _(by Athan Reines)_
-   [`c084c0b`](https://github.com/stdlib-js/stdlib/commit/c084c0b26456c92cda8dbe3f0bf93ae4c32260bf) - **feat:** add `complex/base/assert` _(by Athan Reines)_
-   [`59fb1e6`](https://github.com/stdlib-js/stdlib/commit/59fb1e66b6d1ed34cf97d8240840aa26ca1f2e44) - **feat:** add `complex/base/assert/is-equalf` _(by Athan Reines)_
-   [`02bad1a`](https://github.com/stdlib-js/stdlib/commit/02bad1a684640693a46819992f8935ffc7b203e1) - **feat:** add `complex/base/assert/is-equal` _(by Athan Reines)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_
-   [`ac78ce0`](https://github.com/stdlib-js/stdlib/commit/ac78ce0b1ec7b3178eb955d4eeb7d3a3753a3561) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-23)

<section class="packages">

### Packages

<section class="package" id="complex-base-v0.1.0">

#### [@stdlib/complex/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-cast-return-v0.1.0">

#### [@stdlib/complex/base/cast-return](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/cast-return)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="complex-base-wrap-function-v0.1.0">

#### [@stdlib/complex/base/wrap-function](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/complex/base/wrap-function)

<details>

<section class="features">

##### Features

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="bug-fixes">

##### Bug Fixes

-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - update import paths for complex type defs

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`9768c66`](https://github.com/stdlib-js/stdlib/commit/9768c662b6e255b70ba9fb0faa989ea1eea71f66) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`32a2827`](https://github.com/stdlib-js/stdlib/commit/32a282799ffd272d2a0554e81755a14923564e51) - **fix:** update import paths for complex type defs _(by Athan Reines)_
-   [`2e197bc`](https://github.com/stdlib-js/stdlib/commit/2e197bc4bab1c252c283ff512d82610648368598) - **test:** use strictEqual checks _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2023-02-02)

No changes reported for this release.

</section>

<!-- /.release -->

