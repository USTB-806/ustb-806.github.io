
STORAGE_URL ?= http://140.143.188.19:9000/website/

# 启动本地服务
serve:
	@bundle exec jekyll serve

# 安装依赖
env:
	@bundle install --path=vendor/bundle
	@npm install

# 格式化
format:
	@npm run fix

# 替换本地图片链接为云存储链接
# /static -> $(STORAGE_URL)/static
# 仅替换 .md, .html, .yml 文件
url:
	@find . -type f \( -name "*.md" -o -name "*.html" -o -name "*.yml" \) -exec perl -pi -e 's|/static|$(STORAGE_URL)|g' {} +

.PHONY: env serve format url