/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/coffre-minecraft.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Armature" position={[0, -0.99, 0]}>
        <primitive object={nodes.Bone} />
        <primitive object={nodes.Bone001} />
        <skinnedMesh geometry={nodes.Cube.geometry} material={materials.Material} skeleton={nodes.Cube.skeleton} />
      </group>
    </group>
  )
}

useGLTF.preload('/coffre-minecraft.glb')
