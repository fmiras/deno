// Copyright 2018 Ryan Dahl <ry@tinyclouds.org>
// All rights reserved. MIT License.

import * as ts from "typescript";

export interface TSKit {
  sourceFile: ts.SourceFile;
  checker: ts.TypeChecker;
  visited: Map<ts.Node, true>;
  privateNames: One2ManyMap<string, any>;
}

export type Visitor = (this: TSKit, docEntries: any[], node: ts.Node) => void;