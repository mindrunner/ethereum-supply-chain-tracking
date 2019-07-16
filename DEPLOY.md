[le@w530]: ~/src/ethereum-supply-chain-tracking/cacao>$ ./node_modules/.bin/truffle deploy --network rinkeby

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 0x6ad70a


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > block number:        4740451
   > block timestamp:     1563236581
   > account:             0x3241c3EA0E33b397233bb3CF4de1d0561B641CB0
   > balance:             2.936557394
   > gas used:            246393
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00246393 ETH

   -------------------------------------
   > Total cost:          0.00246393 ETH


2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > block number:        4740453
   > block timestamp:     1563236584
   > account:             0x3241c3EA0E33b397233bb3CF4de1d0561B641CB0
   > balance:             2.932670864
   > gas used:            361630
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0036163 ETH


   Deploying 'DistributorRole'
   ---------------------------
   > block number:        4740454
   > block timestamp:     1563236587
   > account:             0x3241c3EA0E33b397233bb3CF4de1d0561B641CB0
   > balance:             2.929055204
   > gas used:            361566
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00361566 ETH


   Deploying 'RetailerRole'
   ------------------------
   > block number:        4740455
   > block timestamp:     1563236590
   > account:             0x3241c3EA0E33b397233bb3CF4de1d0561B641CB0
   > balance:             2.925438904
   > gas used:            361630
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0036163 ETH


   Deploying 'ConsumerRole'
   ------------------------
   > block number:        4740456
   > block timestamp:     1563236593
   > account:             0x3241c3EA0E33b397233bb3CF4de1d0561B641CB0
   > balance:             2.921822604
   > gas used:            361630
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0036163 ETH


   Deploying 'SupplyChain'
   -----------------------
   > block number:        4740457
   > block timestamp:     1563236600
   > account:             0x3241c3EA0E33b397233bb3CF4de1d0561B641CB0
   > balance:             2.881163224
   > gas used:            4065938
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.04065938 ETH

   -------------------------------------
   > Total cost:          0.05512394 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.05758787 ETH


Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x6abc27


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x4530c69bcda4d7793d467d54edb0f525a2fd21a272aec5e0abd58593d6f659f5
   > Blocks: 1            Seconds: 12
   > contract address:    0x27B69af83D46b692107d9564c5B79308F5A5A4a1
   > block number:        4740452
   > block timestamp:     1563236621
   > account:             0x3241c3EA0E33b397233bb3CF4de1d0561B641CB0
   > balance:             2.936407394
   > gas used:            261393
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00261393 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00261393 ETH


2_deploy_contracts.js
=====================

   Deploying 'FarmerRole'
   ----------------------
   > transaction hash:    0xe61501ff6a87a0ace65c8797773325ecb40850a83dc479bda703fe874efed90c
   > Blocks: 0            Seconds: 12
   > contract address:    0xFAf19B4d6E48F73aFD045155849855a55715Bc81
   > block number:        4740454
   > block timestamp:     1563236651
   > account:             0x3241c3EA0E33b397233bb3CF4de1d0561B641CB0
   > balance:             2.932220864
   > gas used:            376630
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0037663 ETH


   Deploying 'DistributorRole'
   ---------------------------
   > transaction hash:    0x68535c878566ee41dcac24ccfada84fb198bf5be377a14c36b1d7e80abafc903
   > Blocks: 0            Seconds: 12
   > contract address:    0xF9009C72a90144DDEAD9e6eb723B18eF1BC4501A
   > block number:        4740455
   > block timestamp:     1563236666
   > account:             0x3241c3EA0E33b397233bb3CF4de1d0561B641CB0
   > balance:             2.928455204
   > gas used:            376566
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00376566 ETH


   Deploying 'RetailerRole'
   ------------------------
   > transaction hash:    0xdbc3c49d1b996ef1e945e7c0e06d47584cbf12ff2db1137ea19ee6b57e4c0ca8
   > Blocks: 0            Seconds: 8
   > contract address:    0x8F59e281efb7dF1a7e7aE7b197353Bd28545E6E0
   > block number:        4740456
   > block timestamp:     1563236681
   > account:             0x3241c3EA0E33b397233bb3CF4de1d0561B641CB0
   > balance:             2.924688904
   > gas used:            376630
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0037663 ETH


   Deploying 'ConsumerRole'
   ------------------------
   > transaction hash:    0xec82aeb21a63c02b0af93e7b01e2a658ecad80b7b4ab641a6bcdadda123ed1c7
   > Blocks: 0            Seconds: 12
   > contract address:    0x5F0c4B1faa1Be5258679A72DBf381a0Fa846B33B
   > block number:        4740457
   > block timestamp:     1563236696
   > account:             0x3241c3EA0E33b397233bb3CF4de1d0561B641CB0
   > balance:             2.920922604
   > gas used:            376630
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.0037663 ETH


   Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0x81745a0996e5cf4bd60ade0810c2ec605a5e828da55d37607614189f4c3f3c89
   > Blocks: 0            Seconds: 8
   > contract address:    0xb2e4Cd84b0994c7B1Da27F97dd2f1f88a0c12bF2
   > block number:        4740458
   > block timestamp:     1563236711
   > account:             0x3241c3EA0E33b397233bb3CF4de1d0561B641CB0
   > balance:             2.879213224
   > gas used:            4170938
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.04170938 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.05677394 ETH


Summary
=======
> Total deployments:   6
> Final cost:          0.05938787 ETH
