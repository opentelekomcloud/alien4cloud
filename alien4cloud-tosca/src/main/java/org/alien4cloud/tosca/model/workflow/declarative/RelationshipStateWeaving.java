package org.alien4cloud.tosca.model.workflow.declarative;

import lombok.Getter;
import lombok.Setter;

/**
 * Define what the partner of a relationship should do before or after the given state
 */
@Getter
@Setter
public class RelationshipStateWeaving extends RelationshipWeavingDependencies {
    private String state;
}
