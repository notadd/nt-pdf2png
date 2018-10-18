# nt-pdf2png

pdf 转 png 方案，尽在用户访问时转换，大大节省了服务器资源，秒开。

### ubuntu 

```
sudo apt-get install imagemagick ghostscript poppler-utils
```


### OSX (Yosemite)

```
brew install imagemagick ghostscript poppler
```

## 使用 （use）


1.  修改配置文件

一般在： `/etc/ImageMagick-6/policy.xml`

将文件末尾三行改为

```
  <policy domain="coder" rights="read|write" pattern="PDF" />
  <policy domain="coder" rights="none" pattern="XPS" />
  <policy domain="coder" rights="read|write" pattern="LABEL" />

```

2. 克隆项目，在项目下 npm install 

```
npm install
```

3. 运行

```
npm run start
```

4. 访问 `http://localhost:3000/test/test.pdf/0.png`

test.pdf 为文件名， 0.png 为页码（第一页是0）。


## todo

- [ ] 使用 typescript 重写
- [ ] 使用 sharp 替代现有库