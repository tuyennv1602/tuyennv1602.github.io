'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aaafa928a4f8616604eca12d830fe765",
"index.html": "40ecd0010dd669df4db7f32eb71694d5",
"/": "40ecd0010dd669df4db7f32eb71694d5",
"main.dart.js": "9144b74886d943f5774c332a788e4a89",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
".git/config": "02b1699539cbd23deb5fd2a376c6100e",
".git/objects/61/3176d565d8660e5f7b5df71a17e5b606e5c3ef": "b3e1855cc30e69b9906a550efb4d269b",
".git/objects/0c/a14cedacaace913cff83391a37c1933587295a": "f56686f72e920098df4e7adcdd6c9501",
".git/objects/50/3d95379ca5641210a3435613ebd3362977ff8f": "bbd51f8e9c19ca4e3628fe6b366622c5",
".git/objects/6f/c81dc39c397fd751b1e7e527a422c37d6432c4": "3c66e7ada9471db940be07f4f360b092",
".git/objects/04/fab41537c342aa3c2a6b96fd687be05903a1aa": "415b26fff5aa879bbb4b888d2763b9e1",
".git/objects/6a/caf6c8e72e5f7b23ab66a1cd8d4357c4032261": "508fada16316c529fbc1f3106d969fbc",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/d5e2beb1d0c1bc9f307e830fda3756680ff45a": "b137d800a957dd60b8437539d40ea2c0",
".git/objects/56/122e511462c3996815f9c093a23d864ca87602": "502cc004de7b155606c4dc702fd8b68f",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/60/6df07046f2fd2fe34bad9a303802fb4e790dd3": "6d15737b97b03dfb49a27c879a26515d",
".git/objects/33/4b032b5a4f1029f697ea04d9b975ac9fb955d9": "19ce826381380815195b00f6adb23717",
".git/objects/33/1632b2b0d79e98834142efb088675bce16c46e": "9dde61906253a241335deeba71de1a25",
".git/objects/05/871a0c97879005c4fefcedd59aa7d613b2ebfd": "a3b3500750af808f47f2449b7ebfc0a5",
".git/objects/a4/5cd07e9481123459a45388504487c309148e41": "d352bc8006270808e17fd2ad9a488c23",
".git/objects/a4/5c0812303b46bf9e5a48952788c3a0a3b7be10": "320b10da4b7e372de64bc1402517fdd7",
".git/objects/b2/2982f59ad8fc1fad73deec19a3f01aef32ea5c": "14c5111ff133bdf5155d06c4960a0019",
".git/objects/d9/ee23ad74a7eb9a21271ea7bb7d9c45e464a34e": "5fec43bdf46402bfcbfa8d10196e76f6",
".git/objects/bb/1fe3938cbbd3c1bedacf445911cc9d48977629": "cec3955a834c6c0b50462338199ed80f",
".git/objects/d0/a89ff8ba1f31798716689bcd45782f355bcf80": "2bf862c4291fb632550b5b6bb5c0af0e",
".git/objects/d0/2e5fda1346b4dd5b9a2c4a22572c0c98694177": "c7c671923296e761996a878829c1dadd",
".git/objects/da/b84bf16d42bc36cd14710784d0b0178430a1d3": "c8f87ed28d3c5e1f0f87ed6bb21b38ce",
".git/objects/b4/80c64af74b87e916947f49b447fe31683cc53f": "7b9b2ad21ae9327b9a0ea7212eab95ce",
".git/objects/a5/bc8c2fd4126f9e343cca308d0a712737acd109": "a44ef0203cdfe547074b9a96da227c12",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/0b450edebe0e382eca3af0ff71f416f0e9a7cf": "2acc4dcb89266d549385875f61731507",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/58a5ffa25e39daf05a0bd61d5feb31e4b8b01e": "292fdd4f9cded0dbff15aea39a515857",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/418817439b2f071c93a4a6cee831e996123c0b": "a973381dec3e0988db3e91122a03c303",
".git/objects/c9/4111e7563a24c6b3742d48e1a97d6c540ecc70": "cd5ec49b0d8405f19abdb7bdb597dd31",
".git/objects/fd/d11479bef69f1a384540483f1661262b8cd918": "5e9e3b7ee9d5298c01a5b78b8196d26a",
".git/objects/e3/13576cbea8f55186838395c09b95b5de722b88": "1b39f09bc6e7338d8dcacbca920bc5e2",
".git/objects/cf/ebcdf26f06a2ef6a6f18e0db4a7a96dc25eb1a": "3375c2a01bd3ea1893a3fd235d43bd77",
".git/objects/c8/cff72d31b3c87ff9f9f59566cdb730d25aed36": "a608654cb50394d908625d3fa04bef47",
".git/objects/c6/9800abfeff01303325f0cd2baa137233c6fabd": "48848ae03e0b1511ae757642b842da03",
".git/objects/20/c8adb2cd33ca1cc843ba5821b40bf49ae57ad3": "f5eda25b40200aea41241bcad421fcb1",
".git/objects/18/ac23f72308c22949f91826081b754305f49437": "155378ab32ce0a861fe75fd68da713b6",
".git/objects/18/f132f2008c67e1ffca96850b0616010e4c5a27": "0339903fce9ffd1e7fe6f7d81ae346dc",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/74/7ce34b99450958a8f4db03a8049eeda34cc2c0": "a82cc0920316434bd360d0d453efad78",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/6dcc7de60be107e9bbc02d69ac2d5188691c6a": "1e9f279d57ced3d3f3bd6c786ecb7533",
".git/objects/21/4e92a478b3e5f490c518397f523d9b58a36733": "55b00ffe03201c6235bc738f0e338d35",
".git/objects/75/1e836c98e12df9ac372c3b3d3d94cfd2fc3524": "81d4a9f2820f141c2c1d314a622d8899",
".git/objects/86/1cf90c4cf121925b12752a2ae8569c402312ce": "551a3d06ccb035d53d50b9d1c48a9766",
".git/objects/44/2caf2df1e71e6706fdabb325dc5ceabb0dfd36": "3cc5077d846450d53091ab112db2e5c6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/75ba7c8b578cf87b3790bf707bbefc4124c06d": "158347f8eea8f78cbb4ff2601d793902",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/07/a60ba63c5296a7d425ac10e53c92826add066e": "41ecc292ef26b79f9c0158b21d2f61cb",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/5d/0ac9de2975d9edf14fc29658501226f85f59b3": "66fb86ae3a2c9cd6cf88c2cb30dc8335",
".git/objects/31/5f08c373360bf1cb63596a4db91c8f555cc5f7": "9ead0dfa4fc0626dc54ef66569d3d1dc",
".git/objects/65/3a2bf955758e48d22fa1e3b93ebb6bde2154fe": "c562e4e63f72e9a03d7aad4bae097639",
".git/objects/30/9fe785c9c993a697ceafc13e71f945bfada023": "47110ac1ede5c8ac2335611fb597b070",
".git/objects/5e/b39b2a060fb4d0c969303baa5293f45c434516": "5b8d9a92f1b7ceb84e2ead8d6bab8d36",
".git/objects/37/ef17daf53d03227585f90cbecba7b090930027": "4281f55c637873adfa7d242aceb87312",
".git/objects/55/f2c7eaa389e91de8d8c053633c89d5be06c700": "e590978f4f0058a161da74c71cbb0e24",
".git/objects/97/da203ba9b63b2daf59d7e1f196498e5f54a045": "692506ce10d5c00a476927f93ec718c1",
".git/objects/63/3a8083d55858559050ab28a5558c30b7951a37": "8c8c30484e9a78ebeb231ba6c2cca90f",
".git/objects/0a/03d0ec03b2e639370d75b934fcde47827d244a": "e9bfadc0736c6e8c0e649b2582bcfe83",
".git/objects/ba/ab5ac365ac5e1c95533d961b876877b39fcd71": "7910c30436addbfeefedc4a8de7c7695",
".git/objects/a0/42a0e5956f284ba3c571c2488c0dae6bf78efc": "8e5790d1a2db19e63b50b258c758bbb3",
".git/objects/dd/57117b67b03761b435baad58f6e61cb3d4fc8f": "d8e932df6fa9fd882a5aaaffcb8baef7",
".git/objects/a9/cb02e1e92a230939f05498bda8d11fff495b30": "2260f56c6ad0516a7de6832e66b418b0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/91e7064b436c69d06c26023f2d480b552da0a1": "12de67ce4400bec7defa0be3fb9a66d0",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a6/31970231c0ae678cb126a636d674336095c204": "15d50d489752176ca3bdfcfc745aa161",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/9841de9110abb4fd651e4cc2eb7db456340ec7": "c1034967cfa42db4029f8c8585748555",
".git/objects/c3/5f52d2c94b3ea99e12b79e0bb6f277c2020b98": "6e11f789f49707e132a7137c58a3efd4",
".git/objects/c3/58a7266131ec87d8179a673c92b01ef6a94c87": "365b1c185b63270085fa35699b0a8fd9",
".git/objects/e1/c0a6ef0a7f907344c9b07abff4ad43c6ba1ba1": "075b0c832166ce0b6598e6ff0a2b1bce",
".git/objects/cd/3b146efdbc3f7250d5814a79a4d6c1edd6727d": "aa820925a01a24c476f010596142494f",
".git/objects/e8/7db7c6b30fe47890b70f0c50af688860872a30": "217628192b88853b560dbf821c4c92b7",
".git/objects/fa/c978c5eec9d1ed61ab980aa8ba0f35cb91e18a": "db105c13f1b64b2f1dc1c24ec5927847",
".git/objects/f6/7f3ae86bdf07c488b7cfc33fd898123bb03d16": "22f87fffb33e5ec7147abcd84d0ca118",
".git/objects/f8/af1956e49619a36a51d361b89b61b0e8f7b0bb": "e7c81a8f6af24e52f8bb1900d3e6a4ca",
".git/objects/ce/bec75001ab25dc397065f193797d5ebd0cb38d": "d4d1f54312dc6d7f261cb0f8cae9bff5",
".git/objects/e0/7667e0e9d98123d6a9e16dac09568e5c9ebfbd": "44a4190756605183514260b6f4b42507",
".git/objects/46/7f1632a0ae6e52e34bb042f635147418549b01": "2a9769325f547751f1344e502d9688eb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/bf6fa48f8ca022f1879de14cfd9b85e9b17ca7": "66cda570951d30a227c24c84177c5e4f",
".git/objects/77/6d728528382c548f3cb46c0d08402102b2bc4f": "11ae26b2d1f7f386ee159e70fad7d908",
".git/objects/77/14347e92912bfae025c1fd636445bbbdadb626": "c576de0d31dc8ffc6287ce180be2502e",
".git/objects/24/956e9ca5a9f43f9432a5f9e527396fd0a11924": "e66dd7a65e44aad413c643169a52d583",
".git/objects/12/68cec1f92d1cd360c431e6723623227a2c8cdd": "1d5117e81afbe96c616ac02e76021056",
".git/objects/8c/dde2cd41d7e6117b6602df8a5e9c51e06e2686": "f0271b060a063728c6622ef8785e46b8",
".git/objects/1d/9c57b72608ac95a5b59e8b0ba33d3dc4312b2e": "5c90d7c58ffea15102c0e1d1ff2c92c9",
".git/objects/71/8da9412597f069f14f752c8f9974eff64db82a": "51fdc4ce178c5d6eb27768c5efd21b0f",
".git/objects/13/2eb81e675a35c97c9b53abc261fbc2f6f6c256": "f8dc6df85ee6b7d53251edbc21fdd333",
".git/objects/8e/30d54456be75ca5d797f96f493ad99ea24305c": "90cbc6e27dfcd3ec13bce70f2fd4b40f",
".git/objects/22/63e92eb41621fe5168c7789cd1f264912cfa84": "ccc2e180cb54f99df8d59c9dd4737179",
".git/objects/22/c00519f0e03d390e8d66a536e959436ade1170": "253f865b6ef0bc67a73dcadce26ab319",
".git/objects/25/ebc51ad0271ef18861b0936ade82d33d75b6c0": "3e9f502b8b2f8b3b734423ed564ebdaa",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "3784b23637d1a4cb0142fc74c931ba7a",
".git/logs/refs/heads/master": "1c3b56a64a0fc6d0eba83c962b0b691a",
".git/logs/refs/remotes/origin/master": "fc2efd2c1fc564d57311b343f507366c",
".git/logs/refs/remotes/origin/main": "6380771d94923396186f3434206c150a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "a1d8f63dbb6f8d5ac1cce6c588c733e7",
".git/refs/remotes/origin/master": "a1d8f63dbb6f8d5ac1cce6c588c733e7",
".git/refs/remotes/origin/main": "b67585ad9e62b9e72229b9420e104ed3",
".git/index": "283645f439a8d9b5beadce093e265cdf",
".git/COMMIT_EDITMSG": "f1861b088a30b7df36849642ad7a2c6a",
".git/FETCH_HEAD": "11d14ed1f0863d3cbdd115aa38962fc2",
"assets/AssetManifest.json": "9530af260d3d94ecccf561fc6b9a5be4",
"assets/NOTICES": "029ce94bdfff0ee96b6527fb0deecb3b",
"assets/FontManifest.json": "5d0405f8315654dabfa69ad1b263993e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/email.png": "775dfe7f630b37076c29d0e16e21ffcf",
"assets/assets/images/flutter_logo.png": "5cd7cc66c0c9b116450c65de57f628f9",
"assets/assets/images/laptop.gif": "e6bf2bb556372b5906913bc39c8b9116",
"assets/assets/images/app_development.gif": "16dac65b8eb9cd8da3e189ab0fc75393",
"assets/assets/images/android-logo.png": "1cc3b38fd2d51c91fb49e2acae16e96c",
"assets/assets/images/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/images/hust.png": "d8b10ed402e913e09e59f2b3644faefb",
"assets/assets/images/background.jpg": "63444049e6886dc55ec2a97cd5507b12",
"assets/assets/images/employee_of_year.jpg": "f8dc9b4150ee63d44b26e333a72f28a6",
"assets/assets/images/avatar.png": "acf785271f1dd0ac994fe850bb944a89",
"assets/assets/images/skype.png": "b60c47eca061c4eb588735f1d7cfe880",
"assets/assets/images/b13.jpg": "9955d1f3544f51b64d4e55841ed68af9",
"assets/assets/images/linkedin.png": "fd0d5546fdbdc85c76c4372a0d51f1bc",
"assets/assets/images/location.png": "2e7703cb9244b6936f1c1402c3e51500",
"assets/assets/images/phone.png": "34d66e54e782337f82f8cbaf51ad3fa0",
"assets/assets/images/pyco.png": "5c9bf27dba4ee9ad6548c1ad78317c0e",
"assets/assets/images/acazia.png": "67c17394cbf84bfdc174a1b47901946d",
"assets/assets/images/react_native_logo.png": "ad2e6dded24d936dd676df6667ec6e51",
"assets/assets/images/digital.jpeg": "92eb192cfc489dcabee712916e3c629f",
"assets/assets/langs/en.json": "a13aef5a11512277f58f3a07820fb205",
"assets/assets/icons/contact.svg": "9e9f400834011bddd47df80455a8d255",
"assets/assets/icons/like.svg": "f57cbe518979f300b3092da54a4ca4b5",
"assets/assets/icons/working.svg": "b5c8499af0ce6a815eca14eff36a2837",
"assets/assets/icons/group.svg": "d14b7daa2b296dc6b454e3f8cd3d476c",
"assets/assets/icons/projects.svg": "22c634f8982f7889c879450600e2b0c7",
"assets/assets/icons/code.svg": "f5e2820f5ee5500523d2655a41daacf4",
"assets/assets/icons/client.svg": "3cb12629429186e143317c4c424d6694",
"assets/assets/icons/skills.svg": "335ecf24a0b7691768b8855ba4d80a63",
"assets/assets/icons/summary.svg": "51927df151815b830dadb46a8be8583e",
"assets/assets/icons/sun.svg": "75822d50f25d32dcdce330d7a42eb54e",
"assets/assets/icons/education.svg": "fd68934f1d3dde604cfd1d9dfe330b61",
"assets/assets/icons/language.svg": "a6f374860a5adcecfdeb5dd94ea2ad75",
"assets/assets/icons/timeline.svg": "b5c8499af0ce6a815eca14eff36a2837",
"assets/assets/icons/moon.svg": "c8fdf72a817fc2d465857f11cdda4059",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/data/summary.json": "3a3f2997c44899bdc22416a42ab12448",
"assets/assets/data/education.json": "8886e501b8082e65fbb921a49ef0ae60",
"assets/assets/data/experience.json": "1ad4d3ab838df1adf020ab91311af128",
"assets/assets/data/projects.json": "d4c1601a34cf78b36eeaa902189aa815",
"assets/assets/data/contact.json": "6dab919c5ba9e77011df7bcaf516ad89",
"assets/assets/data/skills.json": "f9a2f0135084aa18acc0ae15c4b8c22a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
