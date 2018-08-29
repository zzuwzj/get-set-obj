module.exports = {
  testURL: "http://localhost",
  testMatch: ["<rootDir>/test/*.js"], // 测试文件匹配路径(拿到根目录下test文件夹里的所有JS文件)
  coverageDirectory: "<rootDir>/test/coverage", // 测试覆盖率文档生成路径
  coverageThreshold: {
    // 测试覆盖率通过阈值
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90
    }
  }
}
