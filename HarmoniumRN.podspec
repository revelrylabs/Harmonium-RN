require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = "harmonium-rn"
  s.version      = package['version']
  s.summary      = package['description']
  s.description  = package['description']
  s.license      = package['license']
  s.author       = package['author']
  s.homepage     = package['homepage']
  s.platform     = :ios, "10.0"
  s.source       = { :http => 'file:' + __dir__ + '/'}
  s.source_files = "ios/*.{h,m}"
  s.requires_arc = true

  s.dependency "React"
end