/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayInternalTypes
 * 
 * @typechecks
 */

'use strict';

/**
 * @internal
 *
 * These are types shared across multiple files within Relay internals.
 */

// maps root call args to IDs. ex `username(joe)` -> 123`

// maps node IDs to the IDs of the connections that contain them
Object.defineProperty(exports, '__esModule', {
  value: true
});