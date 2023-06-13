source "https://rubygems.org"
ruby RUBY_VERSION

gem "jekyll", "~> 4.3"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
# github-pages只能要求jekyll为3.9，但是3.9有bug

# If you have any plugins, put them here!
# 插件更新检查时间 <2023-06-13>
group :jekyll_plugins do
   gem "jekyll-avatar",  "~> 0.8"
   gem "jekyll-feed",    "~> 0.17"
   gem "jekyll-sitemap", "~> 1.4"
   gem "jekyll-last-modified-at", "~> 1.3"

   # 使用的机会比较少，暂时不用
   # gem "jekyll-admin",   "~> 0.11" # localhost:4000/admin
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:windows, :jruby]

gem 'wdm', '>= 0.1.0'

# 本站本身不需要octokit
# gem 'octokit', '~> 4.0'
