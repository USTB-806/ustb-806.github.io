
STORAGE_URL ?= https://806web-1301745723.cos.ap-beijing.myqcloud.com

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
	@find . -type f \( -name "*.md" -o -name "*.html" -o -name "*.yml" \) -exec perl -pi -e 's|/static|$(STORAGE_URL)/static|g' {} +

.PHONY: env serve format url