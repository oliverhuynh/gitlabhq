# frozen_string_literal: true

class AddIndexToProjectDeployTokensDeployTokenId < ActiveRecord::Migration
  include Gitlab::Database::MigrationHelpers

  DOWNTIME = false

  disable_ddl_transaction!

  def up
    add_concurrent_index :project_deploy_tokens, :deploy_token_id
  end

  def down
    remove_concurrent_index(:project_deploy_tokens, :deploy_token_id) if Gitlab::Database.postgresql?
  end
end